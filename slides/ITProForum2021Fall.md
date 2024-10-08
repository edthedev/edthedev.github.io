---
layout: slides.njk
title: Unlocking the Future - Identifying, Paying, and Avoiding Technical Debt - Edward Delaporte
slideimg: /slides/img/slidebg.jpg
---

<pre>

# Unlocking the Future:
## Identifying, Paying, and Avoiding Technical Debt

> Glen Shere
> Carl Stephens
> Edward Delaporte

---

## Invest Against Technical Debt

### Invest in making maintenance into a routine.

+ Less scary.
+ Faster.
+ Free of surprises.

---

## Invest Against Technical Debt

### Practical First Steps

+ Build a Regression Suite
+ Have a Pipeline (CI/CD)
+ Set up ChatOps

---

## Build a Regression Suite

### Don't repeat mistakes.

The Regression Suite

+ **starts as a checklist**.
+ lists *critical* things to check after a change.
+ includes the hard-to-remember details.

Long checklists justify RobotFramework, or a PowerShell pester suite.

???

Checklist
+ *critical*: What can't wait for tomorrow if it is broken?
+ Hard to remember: weird URLs, who to ask for help, what error code 7202 means.

QA: Error 7202 probably means the upgrade script is still pointed at the DEV database server.

---

## Build a Regression Suite

### Automate Regression Tests

```robot
Start the Application
    Capture Page Screenshot     
    Click Element               accessibility_id=Get Started
```

+ [RobotFramework](https://robotframework.org/) - Nearly English syntax.
+ [PowerShell Pester](https://github.com/pester/Pester) - Runs anywhere, talks to everything.

???

+ RobotFramework is a plain english automation framework. Does web, which is usually what you need.
+ Pester is a nearly plain English way to specify tests in PowerShell.
+ PowerShell runs everywhere and can talk to everything, it's script, but very readable.

Difference: Robot is for testing. PowerShell is for everything.

---

## Have an Automated Pipeline (CI/CD)

### Campus has good cheap CI/CD options.

+ **GitHub seems to be where the campus community is converging.**
+ Jenkins is the most mature product in the space.
+ Azure DevOps has a solution.
+ AWS has a solution.

These and more are in use on campus successfully.

???

About all:
+ You pay for clock cycles.
+ These options have strong compatibility libraries.

Ed, I already have X? Should I start there? Yes.

+ GitHub is the strongest source control offering, so you are probably using it already. It is *not* hard to check source out from GitHub into another pipeline.


+ Does Jenkins talk to X? Yes. Yes it does.
+ Does Azure DevOps talk to X? Very probably. If you can live with Microsoft's reasonable defaults you will have a good time.
+ Does AWS talk to X? How is your Python scripting?
+ Does GitHub talk to X? How is your JavaScript scripting?

+ AWS Pipelines
+ Look no further, you have GitHub Enterprise.

Tips: Azure DevOps can store your manual checklists for you, and has a planned path toward automation.

---

## Have an Automated Pipeline (CI/CD)

![GitHub Release Screenshot](/slides/img/itpro2021fall/github_release.PNG)

### Delivery is not Deployment.

+ Do everything *except release* automatically.
+ Let the person who answers the on-call phone push the release button.
+ Deploy frequently.
+ One outage can cost a team more time than it takes to setup CI/CD.


???

+ It takes hard work to be ready to deploy that often.
+ It is worth every minute.

+ Some of these investments do not pay back in time, but in better outcomes.
+ You always get back the time you invest in CI/CD.
+ "But my deployments don't take very long!" 
+ What you're really saying is 
+ "when they don't go completely sideways and disrupt everyone's work for hours or days."

---

## Have an Automated Pipeline (CI/CD)

![GitHub Reviews Screenshot](/slides/img/itpro2021fall/github_reviewers.PNG)

### Enforce Change Reviews
+ Those who understand what changed respond most effectively to issues.
+ Mandatory review causes more people to know what changed.

???

+ Reviewers respond effectively to issues.
+ 2 Reviewers + Author = 3 possible responders

---

## Set Up ChatOps

### Start with Chat

+ Make rooms where things typically happen.
+ Add 'update the chat room' to existing playbooks.
+ Put web links in chat.

???

+ Start without bots.
+ Starting manual prevents investing in patterns that don't matter.
+ Learn to use 'deep links' in existing tools.

---

## Set Up ChatOps

![GitHub ChatBot Screenshot](/slides/img/itpro2021fall/github_chatbot_pr.PNG)

### Add DevOps to Chat

+ Automate information into ChatOps rooms.
+ Replace diverse interfaces with ChatBots.
+ Keep chatting with people.

???

+ Valuable automated updates attracts stakeholders to the room.
+ Have fewer arguments about user interfaces.
+ Chat with collegues is the primary value. Keep the space safe for chat.


+ Start with letting automation share information into chat rooms teams already use.
+ [Why ChatOps?](https://blog.yellowant.com/6-reasons-why-chatops-make-workplace-better-875659187d0c)
+ Consider your [Journey to ChatOps](https://medium.com/ibm-garage/making-a-virtual-war-room-the-journey-to-chatops-eaaecd83873c)
+ [ChatOps is not just about bots.](https://www.bmc.com/blogs/chatops/)
+ Resources on [ChatOps](https://github.com/exAspArk/awesome-chatops)

---

## Questions & Answers

???

Bonus slides follow.

---

## Enforce Style Guides 

```sh
MD009/no-trailing-spaces: Trailing spaces [Expected: 0 or 2; Actual: 1]
MD012/no-multiple-blanks: Multiple consecutive blank lines [Expected: 1; Actual: 2]
```

### Quick Scripts Deserve Style

+ [Enforce Style checks with PSScriptAnalyzer](https://github.com/PowerShell/PSScriptAnalyzer)
+ [Flake8 for Python](https://flake8.pycqa.org/en/latest/)
+ [MarkdownLint for Markdown]()

---

## Turn on GitHub Dependabot

[Job Aid: Cybersecurity, GitHub Dependabot security alerts](https://answers.uillinois.edu/illinois/110071)

---


???

Your CI/CD system should check lots of things before and after each production change.

If you're verifying a product with a web or mobile interface, learn RobotFramework.

If you're not sure where to start, Learn PowerShell.
+ PowerShell can do almost anything.
+ More importantly, PowerShell can verify almost anything.
+ Start using PowerShell to verify that past production change mistakes don't happen again.
+ It runs on every platform.
+ It is readable and widely supported.
+ Use the documentation standards.

## Too busy dealing with "That System" to set up CI/CD.

> "Making any change to **that system** is time consuming and dangerous."

???

*About That System*
+ We can't reliably test changes to it.
+ It is behind on patches.
+ You know, in your heart, that it relies on a production Perl script everyone has forgotten.

CICD is how you deal with "That System".
+ CICD is a way to make changes auditable and reversible.
+ CICD gives us back time.



+ Lint/Style tools
+ Automated rebuild with minor releases. Make it one command, or make it automated.
+ Mandatory code review - Tour of GitHub review requiremnts and branch protections here.

???

Ed to pre-record a demo.

+ Aim for 10-12 minutes
+ Proactively pay technical debt via integration documentation, test suites, regression,
CI/CD. (Dependabot)

What to demo:

+ CICD
+ Automated regression tests.
+ Dependabot update pull request.

## For Ed's Outline


</pre>
