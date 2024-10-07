from invoke import task
import os

# $env:INVOKE_RUN_SHELL='C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe'

home = os.path.expanduser('~')
config_dir = f"{home}/AppData/Local/nvim"
ps = r'C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe'

@task
def status(c):
    result = c.run('Get-Command nvim', shell=ps)
    print(f"Nvim installed? {result.ok}")

    print(f"Config dir is {config_dir}")
    c.run(f"ls {config_dir}", shell=ps)
