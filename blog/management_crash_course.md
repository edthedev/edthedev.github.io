---
layout: book.njk
title: Management Crash Course by Edward Delaporte
---

## Article Context

Some of my lead developers go on to become architects, others go on to become directors. In either case, skills managing people are an important part of the equation.

## Critical Concepts

+ Make Slack / Single Team Priority / Brag to Enable Next Steps
+ Deadlines / Decisions
+ Offer Leaders Levers / Never Waste Bad News
+ Have Exactly Two Solutions
  
## Make Slack

> Make Slack / Have a Single Team Priority / Brag to Enable Next Steps

Use 'pull' not push. To the greatest extent possible, let team members choose their work as long as it aligns with the team priority you have communicated. Unless they are still in training, they know their jobs. If they are still in training, assign a senior or lead member of your team to guide them through choosing their work.

For the team, choose one priority every day for the entire team. Only ever ask status questions related to today's priority. Never, under any circumstance, ask a question about something that is not the team's top priority today. Recruit and motivate people and the other work will still get done. When following this rule, there are some questions you will never ask. This is good because those questions were not important. Control your worry.

It is not possible to follow the advice in this book while worrying. Controling worries is a topic for an entire separate book. I highly recommend Dale Carnegie's "How to Stop Worrying", which is an excellently researched well edited masterpiece on the topic.


Diligently track team member victories, and never miss a chance to brag about them. Use one plain text file per year (for the whole team) with clean Markdown formatting. Have a real disaster recovery plan for this text file. Plan offsite backup and restore, and test it on this file. This `victories.md` file is critical to making time and space for your team to do great things.

Another way to make space for your team to do great work is to build relationships with colleagues. Invest early and your collegues will make space for your team to work when it matters. Again, this is a topic for an entire book. Dale Carnegie, once again, has proced a masterpiece on the topic "How to Win Friends and Influence people."

While I don't have a word to add on "How Not to Worry", I have a couple of tips to add on building relationships.

Write down people's exact words when taking notes. This makes them feel validated. Surprisingly few people do this, and people will notice and feel respected by you immediately. It's a simple trick build trust. Try it on your CEO, CIO, CISO or director sometime.

Tip number 2 is to keep track of the trust you have earned, and hold yourself accountable to it. Trust built is easily lost, and so we must stay vigilantly aware of those who trust us and whether we are unfailingly acting worthily of that trust.

Often this vigilant worthiness just takes the form of blunt honesty. I have many times told a colleague "What your team deserves from mine is X, but what we can deliver is Y. We will work to close this gap."

## Dealines and Decisions

Everything critical fits in two weeks. Nothing in technology takes less than two weeks. The smallest problem can explode to consume two weeks. The largest deliverable to can be boiled down to an ugly essence that can be delivered in two weeks.

Set deadlines to ensure delivery. Default to every two weeks. Deliver crap rather than delivering nothing.

If a team's work sucks just a little less with each delivery, stakeholders will stick with them until the delivery becomes excellent.

TODO: Add credit to author of Suck Less concept here, if possible.

Make blocking decisions in less than two weeks, even when they are the wrong ones. Be honest but unremorseful when you learn you made the wrong decision. That was two weeks ago. You were a less experienced leader then.

Don't make non-blocking decisions at all, lest those decisions become blockers for your team.

## Keep Two Solutions

For any problem, your team should always be actively working with exactly two solutions per problem in production: The Legacy way, and the Preferred way.

Have no tolerance for "the new new way" or any multiplication in the old way.

If the team has more than one old way, push hard against introduction of an updated "Preferred" way until all but one "old way" has been cleaned up in production. Use this to motivate your technology adoption leaders to clean up old solutions.

Your adoption leaders should grow to understand that they can adopt anything they like, as long as they put in the work to retire the "old way" at the same time as they work on the "new way".

In more detail, this means: given Oldest, Old, and Newest solutions, the environment should look like this:

Development: Mix of Oldest, Old and Newest Solutions.
Test: Mix of Old an Newest Solutions.
Production: Mix of Oldest, and Old solutions.

All work on adopting the Newest solution should focus on anything using the Oldest solution, because the team knows that you won't greenlight activating the "Newest" for production use until everything using "Oldest" is migrated in test to either "Newest" or "Old".

The specific terms I teach my teams and leadership are: "Preferred", "Legacy" and "Deprecated".

Preferred - all new work is done here if possible.
Legacy - any new work that we don't know how to do on our preferred solution still happens here.
Deprecated - any time work on a deprecated solution is updated in any way, it will be transitioned to use the Preferred or Legacy solution.
