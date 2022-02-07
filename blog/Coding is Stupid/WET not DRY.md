# WET not DRY.

I've been professionally surrounded by people who repeat "don't repeat yourself".

Write everything twice, rather than working about Don't Repeat Yourself.

Follow the rule of three. First time, code exactly what you need.
Second time, copy and paste the first code and make the smallest change you need. Third time there problem comes up - now you write the reusable version. And since you religiously follow the rule of three, you know exactly how many implementations need to be replaced. It's three.

Code that has less than three uses so far isn't understood well enough to be worth making a pattern from.

Train everyone in the team to recognize the rule of three.

Sandi Metz - "Duplication is far cheaper than the wrong abstraction."

Also called GARY - go ahead and repeat yourself.