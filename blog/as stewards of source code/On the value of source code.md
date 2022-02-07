# On the value of source code.

Story: technically we own the code. Want us to sue him for it?

Can you sue him for the careful trail of decision documents created by the team?

No. We didn't do that.

Good. Then I don't want the code. Leave it to my place it has any value - in the hands of the original author.

Moral of the story:

Culture and artifacts matter. Code is an implementation detail.



Some programmers villainize feature branches. The truth is branches are fine as long as they go away (whether merged or not) in a day or two. Branches that survive any longer than that cost unnecessary energy to sync back up with the main work - and it can become the most expensive effort the team wastes their time on.

For this reason, I recommend not having dev and test branches. They are, by nature, branches that survive too long.

But feature branches are fine as long as everyone is committed to getting rid of them promptly. Branches are a temporary tool that becomes harmful if kept too long. Don't treat them like pets.

How shall I know what is in development - it's everything that has not been tagged and released.

How shall I know what is in test? Deploy every merge to main to test and you'll always know what is on test.

How shall I know what is on production? Use your deployment tools version numbering system, and you can just ask it.

Where shall we keep features that aren't ready to release in production? In the main branch, and turned off using feature flags.
