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

+ Build a Regression Suite
+ Have a Pipeline (CI/CD)
+ Set up ChatOps

---

## Build a Regression Suite

It starts as a checklist.
+ Lists *critical* things to check after a change.
+ Includes the hard-to-remember details.
+ Long checklists justify RobotFramework, or a PowerShell pester suite.

???
Checklist
+ *critical*: What can't wait for tomorrow if it is broken?
+ Hard to remember: weird URLs, who to ask for help, what error code 7202 means.
+ RobotFramework - Plain english automation framework. Does web, which is usually what you need.
+ PowerShell pester - pester is a near English way to specify tests in PowerShell.
+ PowerShell runs everywhere and talks to everything.

QA: Error 7202 probably means the upgrade script is still pointed at the DEV database server.

---

## Have a Pipeline

Campus has good cheap options:

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

## Continuous Integration / Continuous Delivery (CI/CD)

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

## Enforce Change Review

![GitHub Reviews Screenshot](/slides/img/itpro2021fall/github_reviewers.PNG)

### Reviewers respond effectively to issues.
+ Those who understand what changed respond most effectively to issues.
+ Mandatory review causes more people to know what changed.

???

---

## Adopt Regression Testing

```robot
Start the Application
    Capture Page Screenshot     
    Click Element               accessibility_id=Get Started
```

### Don't repeat mistakes.

+ [RobotFramework](https://robotframework.org/) - Nearly English syntax.
+ [PowerShell Pester](https://github.com/pester/Pester) - Runs anywhere, talks to everything.

???

+ Robot is written in plain English.
+ PowerShell runs everywhere and can talk to everything, very readable.

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


---



---

## Choose Products with Strong Available Support

> You will use it.

---

## Ambiguitiy costs time

> Set up request templates.

???

+ Most ticketing systems allow templates. Use them.

---

## Exploits cost time.

> Turn on GitHub Dependabot

[Job Aid: Cybersecurity, GitHub Dependabot security alerts](https://answers.uillinois.edu/illinois/110071)

---


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
