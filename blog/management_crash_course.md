---
layout: book.njk
title: Management Crash Course by Edward Delaporte
---

## Article Context

Some of my lead developers go on to become architects, others go on to become directors. In either case, skills managing people are an important part of the equation.

## Critical Concepts

+ Make Slack / Single Team Priority / Brag to Enable Next Steps
+ Deadlines / Decisions
+ Have Exactly Two Solutions
+ Offer Leaders Levers / Never Waste Bad News
  
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

## Bless Two Solutions to Every Problem

For any problem, the team should have exactly two blessed solutions per
problem: production: `Legacy` and `Preferred`. There is no limit to the allowed
number of `Deprecated` solutions; but any new work on a `Deprecated` solution
must result in the new work being accomplished in one of two ways: with either
 the `Legacy` or the `Preferred` solution.

### Terminology

+ Preferred - all new work is done here if possible.
+ Legacy - any new work that we don't know how to do on our preferred solution
  still happens here.
+ Deprecated - any time work on a deprecated solution is updated in any way, it
  must be transitioned to use the Preferred or Legacy solution.

### Manage Transition Through Principles

When `Preferred` starts to become another kind of `Legacy`, while
 `New Preferred` starts to emerge, a leader's job is to step in.

Some leaders misunderstand this principle, and try to stop `New Preferred`.
Those leaders learn the hard way that `New Preferred` cannot be stopped.

Instead, a leader can champion `New Preferred` as simply `Preferred`, while
taking an important stand on the `Legacy` issue that no one else wants to have
anything to do with.

When `New Preferred` arrives, the leader should shift their stance on
`Old Preferred` and `Old Legacy`. The old `Preferred` is now `Legacy` and the
old `Legacy` is now completely unacceptable (`Deprecated`).

When a champion wants to convert everything to `New Preferred`, allow and
encourage them, but with one critical piece of guidance: solutions in the old `Preferred` (now `Legacy`) technology are not to be altered until all
`Old Legacy`/`Deprecated` solutions have been converted first. They are welcome
to champion a new system, but they must start with cleaning up the worst
problem areas first.

Your adoption leaders should grow to understand that they can adopt anything
they like, as long as they put in the work to retire the "old way" at the same
time as they work on the "new way".

When this is working - pull requests and deployments should only ever include
 updates to `Legacy` and `Preferred` solutions. When a `Deprecated` solution
 needs changed, it must be fully updated to use only the `Legacy` and/or
 `Preferred` solutions. As soon as the first solution on a new `Preferred`
 solution is approved for production use, all terms are shifted and all
 future changes must use only the newly named `Legacy` and `Preferred`
 solutions.

## Offer Leaders Levers / Never Waste Bad News

Categorize work for leadership into 3 types:

+ Operational
+ Enabler
+ Strategic

### Operational Work

The core message for leadership is that this work is simply not optional. It must be fully staffed at all times or bad things will happen. Leaders can strategize to reduce operational workload, but must commit to fully staffing for it until that strategy proves successful.

### Enabler Work

Cleaning up technology debt and investing in exploring new innovations.

A common mis-step is to only talk about technology debt cleanup, and causing all innovation to stop as soon as the leaders feel 'caught up'. Be sure to talk about "Enablers" and about continuous investment, because any team that is only 'caught up' will not stay 'caught up' for long.

Enabler work is a lever for leadership. In a crisis, leadership may move all resources to supporting operations, leaving enablers on hold. They will lose their best people daily while doing so, but it may be the right thing for the organization to survive during a true crisis. The rest of the time, leadership should push the "Enabler" level as high as it will go, only briefly pulling it down to enforce organization-wide rest cycles, before pushing it back up to max, again.

In times when the organization is not about to cease to exist, the "Enabler" resource dedication should never be below 20%, but should generally be guided by how successful the leaders want their organization to be 80%, 90%? Any team that cannot dedicate at least 20% to enabler work is unquestionably understaffed and is accruing techincal debt toward eventual extinction.

### Strategic Work

Strategic work is the part that is fun for the leader. This is actually a series of priorities that the leader can move in and out of the top positition (the only position that matters), to test their theories about what the organization needs next.

Leaders will learn over time to not strongly differentiate between strategic priorities and the enabler work they are built on, and instead set exactly one top priority and make room for enabler work that supports it. But they must learn this by being enabled by managers who clearly label 'enabler', 'strategic' and 'operational' work for them. There are no shortcuts on this journey.

Most importantly, to enable your leadership - never waste bad news. This they are expected to take full responsibility for any bad news we owe it to them to ensure this news reaches them as quickly as possible.

To particularly serve our leaders well, we should keep a backlog of pre-packaged 'enabler work' that can be acted on immediately after bad news. This lets the leader quickly announce a plan to do better in the future (suck less), and it gets a valuable set of enabler work off of the backlog and into action.

