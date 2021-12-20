# On State

State is the bits of data that have to exist in your application.

It is undesirable but necessary.

A lot of folks argue needlessly about techniques that just hide state (object oriented programming) or move it around in needlessly complex ways ("stateless" procedural programming).

More architecture crimes have been done in the name of managing applications state than good.

That said, be aware of your state. Spend a lot of time, maybe 90% if your time figuring out of you even need whatever state you have.

Any state you can get rid of will result in a simpler more maintainable more robust solution.

But isn't my state just in the database?

It's at rest in the database, but it's crawling through the pores of your application in ugly ways. It is the root of unnecessary complexity. It sits greedily at the heart of every traffic scaling problem, and every timing issue.

Find it and deal with it. If you can't get rid of it - and you can't! - then at least get it out of your critical and your most used code.

