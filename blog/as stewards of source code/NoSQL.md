# NoSQL

SomeSQL, SQLMaybe

Just aim for BCNF2. It makes it fast. I know you were taught to use BCNF3, but that road leads to needing NoSQL.

D Todo: diagrams on where the validation happens in NoSQL va SQL databases.

Grant permission to move only *some* of the validation, not *all*.

But that sounds messy! Yes. It is. Stop looking for easy solutions to hard problems.

Anything missing in normalization,   you can fix in the data access layer.

Don't do every bit of validation in the data access layer - that's too expensive to maintain. 

Do the 2 out 3 most expensive integrity checks up in the app where you can do them while the user is distracted by choosing sock colors. Where you have the maximum amount of control.

You can still enforce the integrity rule in a microsevice so the front end developer don't screw it up.

Don't be afraid to have a separate blazing fast fully normalized BCNF4 reporting database downstream.

But what happens when something shops through the cracks? You cope and you add a regression test. And you learn a bit about building resilient systems and you just got some free fault detection.


