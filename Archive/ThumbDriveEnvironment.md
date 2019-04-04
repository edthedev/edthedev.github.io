

Thumb Drive Coder
Many developers relate closely to ‘the absent minded professor’ from the Disney film of the same name. When we get a great idea, we’re liable to stop and jot a note about it anywhere; and we can be very loathe to part from that great idea.

So it’s nice that we don’t have to anymore. If you relate to the absent minded professor, get yourself a 2GB thumb drive; and build yourself a portable development environment.

First, you’ll want to grab the PortableApps Core and Menu. Get the smallest version, because you want to save space for your mad science development tools. It is easy to add more PortableApps later if you decide that you need them.

You’ll need Portable Cmd Prompt to run Python commands. In PortableAppsCommandPromptPortableData, you’ll find commandprompt.bat. You can use this folder to set your DOS environment variables. Add these two lines to the end of it:

set PATH=%CD%bin;%CD%Python;%PATH%
set DJANGOSETTINGSMODULE=mysite.settings
Change ‘mysite’ if you choose to use a different project site name to develop under.
I highly recommend getting either Portable GVim or Portable Notepad++.

If you install Portable GVim, then add this line to your commandprompt.bat:

set PATH=%C%PortableAppsGVimPortableAppvimvim71;%PATH%
And if you install Portable Notepad++, then add this line to your commandprompt.bat:
set PATH=%CD%PortableAppsNotepad++PortableAppNotepad++;%PATH%
If you’re a rails hacker, grab yourself a copy of Instant Rails. But I’m going to continue to give you instructions for setting up Portable Django, since it’s a little bit trickier. In theory, Instant Rails will just run from this point. Portable Django needs a few extra installation steps.
For Python and Django, download Portable Python. Install PortablePython to the drive root folder, or else adjust the Python path that you added to the commandprompt.bat, earlier. As Job’s Cry mentions, you may want to download the latest version of Django and copy it over the version that comes with Portable Python.

Now create a file called django-admin.bat and put it in bin on the thumb drive. Add the following line to it:

python %CD%PortablePython1.0Libsite-packagesdjangobindjango-admin.py %1 %2
And if you’re a Linux Guru, you’ll want to grab these batch files that make DOS feel a bit more like Linux; and put them in bin as well.
If you’re doing this to learn Django; start the Command Prompt Portable from your Portable Apps menu, and start following the instructions at Writing Your First Django App. Your first three commands will be:

django-admin startproject mysite
cd mysite
python manage.py runserver
Then navigate to http://127.0.0.1:8000/, and you should see your Django running from your thumb drive.
Since you’re running from a thumb drive, you’ll want to modify settings.py in the mysite folder to use sqlite3. Download a copy of Sqlite3, and place the sqlite.exe file into the ‘bin’ folder that you created earlier. Then, in settings.py set DATABASEENGINE and DATABASENAME as you see below. Be sure to leave off the drive letter name, since it’s going to change whenever you switch computers.

DATABASEENGINE = 'sqlite3'
DATABASENAME = '/mysite/mysite.db'
I am having a great time with this; and I hope you do too.