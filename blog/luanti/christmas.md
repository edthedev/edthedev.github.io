---
layout: blog.njk
title: Christmas in Luanti
tags: ['blog', 'rss']
date: 2025-12-25
---

Merry Christmas, everyone!

Let's add some Christmas decor to Luanti!

![a Luanti screenshot showing my inventory open with a candy cane, tinsel, garland and other Christmas decor](/img/blog/luanti_christmas.jpg)

The commands below use [my Luanti invoke file](invoke).

[invoke]: https://codeberg.org/EdTheDev/dotfiles/src/branch/main/invoke/luanti-remote/tasks.py

First, I downloaded `Christmas Decor` in my local copy of Luanti, on my laptop.

Next, a few commands.

I shutdown my Luanti server:

```sh
ssh $USER_AT_IP
screen -r
Ctrl+C
```

I need to know the mod folder name, so I run `invoke list-local-mods | grep christmas`

Here's the invoke source code to `list-local-mods` (from [my invoke file][invoke]).

```python
@task
def list_local_mods(c):
    c.run(f'ls -al {LOCAL_LUANTI}/mods')
```
Then I compress, push, and unpack the mod with `invoke push-local-mod christmas_decor`

Here's the invoke source code to `push-local-mod` (from [my invoke file][invoke]).

```python
@task
def push_local_mod(c, mod):
    tarfile = f'{LOCAL_BACKUPS}/mods/{mod}.tar'
    print(f'Compressing local mod {mod} to {tarfile}')
    c.run(f'tar cf {tarfile} --directory={LOCAL_LUANTI}/mods {mod}')
    c.run(f'tar --list -f {tarfile} | tail')
    c.run(f'tar --list -f {tarfile} | wc')

    print(f'Pushing {tarfile} to {USER_AT_IP}:/tmp')
    c.run(f'scp {tarfile} {USER_AT_IP}:/tmp')
    c.run(f'{SSH} -C ls /tmp | grep {mod}')

    print(f'Unpacking {mod}.tar...')
    c.run(f'{SSH} -C tar xf /tmp/{mod}.tar --directory {MODS}')
    c.run(f'{SSH} -C ls -l {MODS} | grep {mod}')
    c.run(f'{SSH} -C ls -l {MODS}/{mod}')

    print(f'Enable {mod} in config')
    print(f'Remember to enable {mod} in config (invoke enable-mod {mod})')

```

Next, I still need to enable the mod in my world config file, with `invoke enable-mod christmas_decor`. 

Here's the source code for that. We get a bit fancier here, because we don't want the enable configuration line to get added over and over again if I repeat the command.

```python
@task
def enable_mod(c, mod):
    enable_line = f'load_mod_{mod} = mods/{mod}'
    result = c.run(f'{SSH} -C cat {WORLD_CONF} | grep {mod} &2>/dev/null')
    print(result.stdout)
    if(not mod in result.stdout):
        print(f'Mod {mod} not found in {WORLD_CONF}. Adding.')
        c.run(f'{SSH} -C "echo {enable_line} >> {WORLD_CONF}"')
    else:
        print(f'{MOD} already enabled in {WORLD_CONF}')
        print(f'Grep result: {result.stdout}')
    print("Remember to restart the server (invoke serve)!")


```

Finally, I need to restart the server with `invoke serve`.

But, my `invoke serve` command does not allow me to proceed without a verified backup from today, so I need to run a couple of commands, first.

So I must call `invoke backup` and then `invoke verify-backup`.

Backing up without stopping the server results in a corrupt world database, so I take some extra precautions during these steps.

Note that `invoke backup` calls `compress_world` first automatically, so here's the source code to all three:

```python
@task
def compress_world(c):
    c.run(f'{SSH} -C tar cf {HOME}/{BACKUP_FILE} --directory={WORLDS} {WORLD}')

@task(compress_world)
def backup(c):
    stopped = input("Is the server stopped?")
    if(stopped != 'y'):
        print("so go stop the server...")
        exit()
    print(f'Backup {HOME}/{BACKUP_FILE} to {LOCAL_BACKUPS}')
    c.run(f'mkdir -p {LOCAL_BACKUPS}')
    c.run(f'{SCP}:{BACKUP_FILE} {LOCAL_BACKUPS}')
    print(f'Backedup up {BACKUP_FILE} to {LOCAL_BACKUPS}')
    c.run(f'ls -lh {LOCAL_BACKUPS} | grep {WORLD}')
    c.run(f'tar tvf {LOCAL_BACKUPS}/{BACKUP_FILE}')

@task
def verify_backup(c):
    TAR_FILE=f'{LOCAL_BACKUPS}/{BACKUP_FILE}'
    DB_FILE='map.sqlite'
    print(f'Extracting {DB_FILE} from {TAR_FILE}')
    c.run(f'cd /tmp;tar --extract --file={LOCAL_BACKUPS}/{BACKUP_FILE} {WORLD}/{DB_FILE}')
    result = c.run(f'echo "PRAGMA quick_check;" | sqlite3 /tmp/{DB_FILE}')
    # print(f'Check on {DB_FILE}: {result}')
    # print(f'Exit code: {result.exited}')

    if(not 'ok' in result.stdout):
        print("=========================================")
        print("database is corrupt, restore from backup!")
        print("=========================================")
```

Now, I can restart the server, and login to enjoy some new Christmas decor!

```python
@task(verify_backup)
def serve(c):
    print(f"Attempting to connect to {IP}")
    result = c.run(f'ssh {USER}@{IP} -C {SERVE}')
    print(f'Server should now be running in a remote screen session.')
    print(result)
```

Here's the full set of commands, without the pauses to read source code:

```sh
ssh $USER_AT_IP
screen -r
Ctrl+C
# Download the `Christmas Decor` mod using my local Luanti client
invoke list-local-mods | grep christmas  # To learn the folder name is `christmas_decor`
$MOD=christmas_decor
invoke push-local-mod christmas_decor
invoke enable-mod christmas_decor
invoke backup
# Press 'y' to confirm that I stopped the server earlier.
invoke serve  # runs `verify-backup`, before starting the server.
```
