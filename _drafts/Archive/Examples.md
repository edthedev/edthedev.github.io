
## Favorite Vim commands

:!python %
Run the current file in Python
:% s/regex/replacement/g
Replace every instance of the regex with the given expression.
:! svn ci %
Check the current file into SVN version control.
ESC 77 G i
Jump to line 77 in the file, then return to edit mode.
ESC $ i
Jump to end of line, then return to edit mode.
ESC A
Start editing at the end of the current line.

## Android Development with Eclipse

Here’s a guide to get you started developing Android applications with Eclipse. The whole process took me about an hour tonight.

Step 1: Get Eclipse setup for Android development: Installing the Eclipse Android Plugin

Step 2: Write ‘Hello World’: Hello World for Android with Eclipse

Step 3: Bask in the aura of how much nicer Java is than Objective-C, and how much simpler it is to read two web pages than watch 15 videos through iTunes.

It’s hard to express how nice a first impression the Android plugin for Eclipse makes. It’s a much nicer experience to work with than XCode. Of course, so is getting poked in the eye by a monkey; so not the most relevant comparison.

## Why do I love JSON?

One of the things I loved in the Android plugin for Eclipse (and about Android in general), is the way XML can be used to manage parts of the application that are actually data. XML still sucks, but the Eclipse plugin keeps you from actually having to read XML unless you really wanted to.

That said, I would still rather be using JSON than XML. 

## colorLine
Why? Because it’s awesome.

from turtle import * def colorLine(distance, colors): ... for x in range(0, distance, 1): ... color(colors[x % len(colors)]) ... forward(20)

colorLine(400, ["red", "blue", "purple", "pink", "white"])

## JavaDoc checklist
Things to remember when writing JavaDoc:

Class declaration
/**
* (Class name)
(Purpose of the class…)
 <p>
(Copyright)
* <p>
* (License)
@author Edward Delaporte, Research Programmer, University of Illinois
* @author (anyone else), Research Programmer, University of Illinois
* <p>
* Last updated by $Author$
* @version $Revision$
* <p>
* Subversion URL: $URL$
*/
Method block
What it does.
Parameters with @param variableName description
Return type with @return description
Possible exceptions with @throws, including known causes.
* Comment every control structure.

## WPA on Ubuntu at Illinois
Continuing with articles about connecting to the network at the University of Illinois from an Ubuntu computer, here’s a hint about connecting to the UiWpa2 / IllinoisNet Wireless:  Ubuntu may not automatically choose a certificate authority for you; you may need to browse for a CA certificate.

Choose the Thawte Premium Server CA – it will work at Illinois (and quite a lot of other places, actually): /etc/ssl/certs/ThawtePremiumServer_CA.pem

As usual, enter your NetId for your username, and you can use your Active Directory password.

If you’re still having trouble getting online, check out the CITES Homepage for more information on Illinois network resources.

2019 March Update: This is no longer of any use to anyone as the whole software and network stacks involved are drastically improved. But it's worth noting that this was by far the most popular post on EdTheDev.com for about half a decade. Presumably being found by a friend who ran windows and thus had network access...

## Get rid of the annoying Mac boot up sound
Macintosh is a lot nicer than Windows in a lot of ways. Making stupid noises while booting up is, unfortunately, a throw-back to the worst that Windows has to offer.

If you ever need to boot your computer during a meeting or in a library, grab the Mac StartupSound.prefPane freeware over at Arcana Research – Software & Download.

## Eclipse Plugin Fix

The problem: Your fresh install of Eclipse won’t succeed in installing any of the plugins that make it wonderful; so Eclipse is useless to you. The specific error you’re seeing is:

The artifact file for osgi.bundle,
org.eclipse.ant.ui,3.4.1.v20090901_r351 was not found.
Rather than analyse, research, and work to fix the problem, you could just trust me that the following Debian-Fu will solve it:
sudo aptitude install eclipse-jdt eclipse-pde
Don’t thank me, thank the nice folks who commented on the bug over at:
https://bugs.launchpad.net/ubuntu/+source/eclipse/+bug/477944

## Ubuntu Clock Screenlet
I’m not particularly impressed with any of the available Ubuntu clock widgets. Luckily, I found a better option. If you want a nice clock in Ubuntu, you may choose to:

1. Install Screenlets (Applications - Ubuntu Software Center)
2. Run Screenlets (Applications - Accessories - Screenlets)
3. Launch an extra copy of the 'Output' screenlet (Select 'Output', then press 'Launch/Add')
4.Configure the 'Output' screenlet with these settings: (Right-click the grey box that appeared somewhere on your desktop.)
  a. Under Properties - Options - Screenlet
    a.i. Scale: 5
  b. Under Properties - Options - Options
    b.i. Command to run: date +%I:%M
    b.ii. Update interval seconds: 15
    b.iii. Width: 50
    b.iv.  Height: 25
Now drag it to wherever you want, and enjoy.

##   University of Illinois Laptop Recovery

2009 Nov 18

The University of Illinois Network Security team offers a computer registration service for campus networked devices. Registering a device used on campus increases the chances that Campus Police (with help from Network Security) can recover the device if it is stolen. I’m a big fan of this service because I wrote it for them.

http://www.cites.illinois.edu/security/register/

## diff a directory with Python

2009 Nov

I needed to diff the entire contents of two code directories today (a lot of old code files and new code files before and after for a security audit). There is probably a simple *Nix pipe-style command to do that; but I have more programmer in my blood than *Nix admin.

Without further ado, here’s the script:

```python
import subprocess
import os
import traceback

report_file = "diff_report.txt"
home = "/home/edward/audit"
old = "prod"
new = "testing"
file_type = ".pm"

# diff = "/usr/bin/tkdiff"
diff = "/usr/bin/diff"

# Report header...
report = open(report_file, 'w')
report.write('Diffs and files that are new:\n') 
report.close() 

# Processing...
report = open(report_file, 'a')
new_files = os.listdir('./%s' % new)

for file_name in new_files:
    old_file = "%s/%s/%s" % (home, old, file_name)
    new_file = "%s/%s/%s" % (home, new, file_name)
    args = "%s %s" % (new_file, old_file)
    command = "%s %s" % (diff, args)
    command_input = [diff, new_file, old_file]
  #   call(command_input)
    if file_type in file_name:
        if os.path.exists(old_file):
           print "Running command: %s" % command
           try:
               diff_job = subprocess.Popen(command_input, stdout=subprocess.PIPE)
               report.write("--- Diff of %s:\n" % file_name)
               report.write(diff_job.communicate()[0])
           except Exception, e:
               print "Command failed: %s" % command
               raise e
               print traceback.print_stack()
        else:
            report.write("--- New file %s:\n" % file_name)
            new_handle = open(new_file, 'r')
            report.write(new_handle.read())
            new_handle.close()

report.close()
```

2019 March Update: PowerShell is so much nicer for this sort of thing. Glad I don't have to fight Python's OS module for quick system hacks anymore!

## The Fairy Tale Beauty of Unit Testing
To demonstrate the incredible beauty of unit testing, I have composed this short script. Imagine how much better your favorite fairy-tales would be if they conformed to modern programming best practices!


```python
ok(here.contains('shoemaker'))
ok(now() >= midnight)
ok(now() <= sunrise)
elf.enter()
while not shelf.isfull():
    elf.makeshoe()
ok(shelf.is_full())
```

Yea, I’m weird. I know.

## Docking Windows in Microsoft Windows
Windows 7 finally introduced the ability to dock your separate applications into different portions of the screen. Since most of us haven’t adopted Windows 7 yet, AutoHotKey for Windows provides the same functionality now. As a web developer, I rarely work in an IDE, so I am constantly using AutoHotKey to control my windows, instead.

I took a script featured at LifeHacker, and modified it to suit my own needs. Specifically, I bound Windows+Down to resize the active window to be short and wide at the bottom of the screen.

So my ‘docks’ are:

Windows+Up: Full Screen

Windows+Left: The left half of the screen

Windows+Right: The right half of the screen

Windows+Down: A wide window in the bottom third of the screen. My script also makes Windows+N open GVim, and makes Windows+G launch a Google search, because it’s just that awesome.

And here is my script: autohotkey ahk

2019 March Update: This exact functionality, keybindings and all, is built into Windows 10.