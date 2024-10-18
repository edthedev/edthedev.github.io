from invoke import task

import datetime
import os

home = os.path.expanduser('~')
flat_pak_root = f"{home}/.var/app/net.minetest.Minetest"
root = f"{flat_pak_root}/.minetest"
mod_dir = f"{root}/mods"
easy_dir = f"{home}/minetest/"
run_mt = f"flatpak run net.minetest.Minetest"

# flatpak
link_to = f"{home}/.var/app/net.minetest.Minetest/.minetest"  
# default
# link_to = f"{home}/.minetest/"

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

# DONT - flatpak hates symlinks
def link(c):
    # c.run(f"ls -al {link_to}")
    if os.path.isdir(link_to):
        print("Moving existing files...")
        c.run(f"mv {link_to} {easy_dir}")
    if not os.path.isdir(easy_dir):
        raise ValueError(f"{easy_dir} not found.")
    if os.path.exists(link_to):
        print(f"Doing nothing. {link_to} exists.")
    if os.path.isdir(easy_dir) and not os.path.exists(link_to):
        print("Linking...")
        c.run(f"ln -s {easy_dir} {link_to}")
    # c.run(f"ls -al {link_to}")

@task
def status(c):
    print(f"+ Minetest data assumed to be at {link_to}")
    print(f"+ Easy folder assumed to be {easy_dir}")
    print(f"+ ls ---")
    c.run(f"ls -ald {link_to} | grep minetest")


@task
def games(c):
    print(f"+ List Games ---")
    cmd = f"{run_mt} --gameid list"
    c.run(cmd)

@task
def play(c):
    c.run(f"{run_mt}")

@task
def worlds(c):
    print(f"+ List Worlds ---")
    cmd = f"{run_mt} --gameid minetest --worldlist path"
    c.run(cmd)


@task
def version(c):
    cmd = f"{run_mt} --version"
    c.run(cmd)

@task
def serve(c, world="SurfaceWorld"):
    cmd = f"{run_mt} --gameid minetest --server --worldname {world}"
    c.run(cmd)

@task
def bkmod(c, name=None):
    '''Save the current set of mods and create an empty mod directory.'''
    if not name:
        name = datetime.datetime.now().strftime("%Y%h%d%H%M")
    c.run(f"mv {mod_dir} {root}/mods_{name}")
    c.run(f"mkdir -p {mod_dir}")
    c.run(f"ls {root}")

@task
def rmod(c, name):
    '''Restore a backed up set of mods.'''
    bk = datetime.datetime.now().strftime("%Y%h%d%H%M")
    c.run(f"mv {mod_dir} {root}/mods_{bk}")
    c.run(f"mv {root}/mods_{name} {mod_dir}")
    c.run(f"ls {root}")


