from invoke import task
import os


home = os.path.expanduser('~')
easy_dir = f"{home}/minetest/"
link_to = f"{home}/.var/app/net.minetest.Minetest/.minetest/"  # flatpak
# link_to = f"{home}/.minetest/"  # default 

@task
def debug(c):
    result = c.run('which minetest')
    print(result.ok)

@task
def install(c):
    print("Installing...")
    # result = c.run('which minetest')
    # if not(result.ok):
    c.run("sudo apt install flatpak")
    c.run("sudo apt install gnome-software-plugin-flatpak")
    c.run("flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo")
    c.run("flatpak install flathub net.minetest.Minetest -y")
    result = c.run('which minetest')
    print(f"MineTest installed at {result.stdout}")
    print("To run: flatpak run net.minetest.Minetest")

@task
def restore(c, dir):
    if not os.path.isdir(dir):
        print(f"No backups found at {dir}")
        return
    print(f"Will restore MineTest backup from {dir}")

    world_folder = f"{home}/minetest/worlds"
    c.run(f"mkdir -p {world_folder}")
    print("Restoring backed up worlds...")
    c.run(f"mv {dir}/* {world_folder}")
    print("Finished")

@task
def link(c):
    if os.path.isdir(link_to):
        print("Moving existing files...")
        c.run(f"mv {link_to} {easy_dir}")
    if os.path.isdir(easy_dir) and not os.path.exists(link_to):
        print("Linking...")
        c.run("ln -s {easy_dir} {link_to}")

@task
def status(c):
    print(f"Minetest data is at {link_to}")
    c.run(f"ls -al {link_to}/..")

