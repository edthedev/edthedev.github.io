from invoke import task
import os
import platform

# $env:INVOKE_RUN_SHELL='C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe'

home = os.path.expanduser('~')

ps = r'C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe'
config_dir = f"{home}/AppData/Local/nvim"

if(platform.system() == 'Linux'):
    ps = r'/usr/bin/pwsh'
    config_dir = f"{home}/.config/nvim"

@task
def link(c):
    c.run(f"ls -al {config_dir}")
    c.run(f"ln -s {home}/dotfiles/files/init.lua {config_dir}/init.lua")

@task
def plug(c):
    c.run(f"curl -fLo {config_dir}/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim")
    c.run(f"cd {config_dir}/autoload; tree .")

@task
def status(c):
    result = c.run('Get-Command nvim', shell=ps)
    print(f"Nvim installed? {result.ok}")

    print(f"Config dir is {config_dir}")
    c.run(f"ls {config_dir}", shell=ps)


