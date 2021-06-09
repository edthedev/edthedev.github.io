---
layout: slides.njk
title: BTAA Presentation - Edward Delaporte
slideimg: /slides/img/slidebg.jpg
---

<pre>

# Cybersecurity Development

Enhancing the Cybersecurity Program 
to make University Software Development Safer

Presented by Edward Delaporte, June 2021

???

We call the team "SecDev" for short.

Overview:
+ COVID Success Stories
+ What we strive to deliver.
+ The SecDev team composition / skill-set.
+ Our SecDev program Rules of Engagement
+ Collaboration opportunities.

TODO: Take a pass to ensure notes are speaking to outcomes in each case.

NOTE: Clocked in at 23 minutes. A little long...There was some awkward wording in the notes...

---

## Success Stories

Illinois COVID Response

+ Safer Illinois Mobile App
+ COVID Test Pipeline - Results in 6 hours.


???

What:
+ Emergency mobile app produces in 2 months.
+ Ultimately delivered 10k daily COVID tests in Champaign-Urbana - the highest of any city in the country.
+ Custom AWS data pipeline delivering private results to the user's Safer Illinois mobile app
+ Typical 6 hour turn-around for results.

Lessons:
+ Illinois investments paid off.
  + Partnership with the Rokwire 
    + Smart community framework and mobile app platform.
    + Privacy First design (before COVID)
  + Long term investments by the security team in the Illinois developer community.
  + Long term investments by the Identity and Access Management team in the Illinois developer community.

---

## We Strive to Deliver 

+ Guides that connect best practices to available tools to campus standards and policies.
+ Presentations
+ Engagements

???

Be better guides.
+ Past: Here's a map of the wilderness, a compass, and a walking stick. Good luck.
+ Now: We can walk with you for the most common routes, and be a phone call away for the remaining unique research challenges.

In each job aid, we try to raise awareness of:
+ Best practices and tools 
  + Let's take care of the uninteresting 80% solution together.
+ Policies 
  + You're doing world class research - we understand that. 
  + Navigate the policy as you can, and reach out to us when you need help.

How we engage:

+ Presentations - Talk about the guides and talk about lessons learned. Tell the story of the journey we're on together.
+ Engagements 
  + Join their stand-ups, join their working sessions, submit pull requests with code changes, share example exploits.
  + We are never the police. Help people understand the risks and make a wise practical choice.

Enjoy! 
+ We are helping developers find cool tools. 
+ This stuff is scary, but we can be a strong ally.
+ For the first year, we only even considered technologies that give both security and non-security benefits.

---

## Build a Team

Team Skills:

+ Software Development Experience

???

+ Each team member must have done development work to advise other developers. 
+ We don't currently have a junior level position.

---

## Build a Team

Team Skills:

+ Software Development Experience
+ People Skills
+ Generosity

???

Interview question: How do you feel when you have to shelf your favorite project 

+ Working with your team should be a privilege. Make people feel good about it.
+ Your team members need to prioritize their allies success over their own creations. This doesn't come naturally to all developers.



---

## Build a Team

Team Skills:

+ Software Development Experience
+ People Skills
+ Generosity
+ Hacking
+ Continuous Deployment

???

Hacking
+ Is this your private key? Okay. Let's fix it together.

+ How do you convince people they need help? There's no substitute for breaking into something to get someone's attention.
+ Proactive solutions all revolve around CI/CD with git.
+ Refined solutions require experience with IAM, QA, and Static Code Analysis.

CICD

+ Introducing CICD brought time-to-remediation down from months to minutes.
+ This is the backbone of all the proactive tools.

---

## Build a Team

Team Skills:

+ Software Development Experience
+ People Skills
+ Generosity
+ Hacking
+ Continuous Deployment
+ Identity Management
+ Quality Assurance
+ Coding for Compliance

???

IAM, QA, Compliance

---

## Rules of Engagement

**Require Agile Practices before Engaging**

Teams must:
+ Hold daily stand-ups.

???

+ The simplest solution to being highly available is to join their daily stand-up.
+ Our biggest vulnerability preventions were caught during a daily stand-up discussion.
+ Stand-ups are a skill that requires leadership support to allow team members to practice and get good.
+ Anyone can benefit from a daily stand-up.
+ But a team of people practiced in attending stand-ups gains exceptional value from adding a security team member.

---

## Rules of Engagement

**Require Agile Practices before Engaging**

Teams must:
+ Hold daily stand-ups.

???

+ Most teams already have a daily stand-up.
+ Add it if not, and a member of my team will be there.
+ Members of my team will invite other subject matter experts in SecDev or Security Engineer or IAM - for the next stand-up.
+ Typically brings a team live relevant expertise within 24 hours.

---

## Rules of Engagement

**Require Agile Practices before Engaging**

Teams must:
+ Hold daily stand-ups.
+ [Keep a Change Log.](https://keepachangelog.com/en/1.0.0/)

???

+ If your dev teams only change one thing - it should be committing to keeping a ChangeLog.
+ When the SecDevOps team stop complaining, the changelog has enough detail.
+ A sign of success is when ChangeLog notes are copied and pasted into formal Change Control.

---

## Rules of Engagement

**Require Agile Practices before Engaging**

Teams must:
+ Hold daily stand-ups.
+ Keep a Change Log.
+ Keep a backlog.

???

Story
+ One team we worked with was not keeping a backlog. 
+ There was no way to decide what to work with them on.
+ We made keeping a backlog a requirement for our assistance.
+ Their team lead worked late into that evening to create the backlog - I know because I received notifications.
+ This allowed me to read along and figure out where my IAM expert, my pipeline expert, 
+ Their work velocity improved immediately.

Which backlog?
+ Any backlog. 
+ A shared Word Document will suffice on day one.
+ GitHub Issues is the "nobody ever got fired for buying IBM" of backlogs. 
+ The backlog tool you already have is the best one.
+ But take care not to treat the backlog as a work queue. 
+ A backlog item is not a commitment - it's a piece of work with value that we may or may not decide to do.

---

## Rules of Engagement

**Require Agile Practices before Engaging**

Teams must:
+ Hold daily stand-ups.
+ Keep a Change Log.
+ Keep a backlog.
+ Use `git`. 

???

+ `git` is a crucial collaboration protocol supported by all modern collaboration tools.
+ You can have any code collaboration protocol you want, as long as you want git.
+ You really can have any provider - GitHub, GitLab, Jenkins, Azure DevOps, AWS CodeDeploy.

---

## Success Measurements

+ Fewer Vulnerabilities in the Wild
+ Development team adoption of best practices for Cybersecurity.
+ Development leads reaching out to us with their concerns.

???

Best practices include:
+ ChangeLogs, backlogs, CICD pipelines, ChatOps, Regression tests, test automation

Dev Leads
+ I keep a check list of influential development leaders - whether they have reached out to us yet.

---

## Collaboration Opportunities

+ Community of Practice.
+ Open Source Collaborations.
+ Job Aids we can share.

Email: delaport@illinois.edu

???

+ We are happy to share our Job aids for software development teams
+ Would love to establish a community of practice.

Our open source efforts are focused around the 
InCommon Trusted Access Platform
+ ncsa/bhr - black hole router
+ AWS CLI Login - Shibboleth integration for AWS command line

---

## Questions & Answers

---



## Some Self-Reflection 

+ This is an Identity Management effort.
+ This is a Quality Assurance effort.
+ Realize opportunities to collaborate with Accessibility.

???

+ Collaboration with IAMU and QA have been critical.
+ IAM solves a lot of problems before they grow bigger.
+ QA has some of our leaders who understand the shared purpose of reliability.
+ Accessibility has similar challenges and interfaces many of the same ways. 

---

## Some Self-Reflection 

+ This is an Identity Management effort.
+ This is a Quality Assurance effort.
+ Realize opportunities to collaborate with Accessibility.
+ We are developers whose main purpose is not development.

???

Embrace the discomfort of being developers who do more than develop software.
+ Imagine it as an extension of the principle: Aim for fewer lines of code with higher quality.
+ We do have a set of products for the team to work on, to stay sharp and share recipes.
+ Our priority is being available to University of Illinois development teams.

---

## More Random Thoughts 


Lessons:
+ It was good to have a software product to rally around and practice on, but the real product is the program.
+ Demand agile practices before engaging - git use, a backlog, daily stand ups, a change log, etc. Doesn't have to be perfect, but if the team has no respect for their own time, they will be unable to respect your team's time.
+ Use git. It is now a protocol, not just free a tool. You must have support for the leading collaboration protocol to succeed.
+ This is a QA team.
+ This is an IAM team.
+ Boy do changelogs pay off. If you only do one thing - start enforcing changelogs.
+ bias toward open source - we are a small team and don't write much - guideline towards btaa contribution - particularly around IAM and QA.

Offer of mentorship - it pays off. A national program can take much higher swings than a local one. 



## BTAA talk thoughts

Build relationships.
Focus first only on tools that being both Cybersecurity and efficiency wins. There will be time for the Cybersecurity win with efficiency loss later, using the efficiencies you help free up now.

---


## The five love languages of software development:

+ Words of affirmation - flatter the teams you want to learn from. Identify them as bright spots and publicly interview then about how they did it.
+ Gifts - pay for tooling, and submit pull requests. Make CICD the priority - then add static code analysis, code review standards, automated testing, and ChatOps for security gains.
+ Touch - nope.
+ Acts of service - be there for them with highly available expertise. (HA has a staffing cost.)
+  Quality time - join their stand ups. Demand that they follow your (and industry prescribed best practices) for agile. Once they do, join their agile scrum.

---

Todo: section explaining all the security wins in a strong CICD pipeline.


---

## Two

???

+ Development done better. Mentorship.
+ Mentorship doesn't just mean better code - it can mean less code, more of the necessary code, etc.
+ 2800x faster security patch response time with a CICD pipeline and ChatOps in place.

---

</pre>