---
layout: slides.njk
title: Caffeiene Break Presentation - Edward Delaporte
slideimg: /slides/img/slidebg.jpg
---

<pre>

# Secret Detection with pre-commit

Enhancing the Cybersecurity Program 
to make University Software Development Safer

Presented by Edward Delaporte, March 2022

???

We call the team "SecDev" for short.

Overview:
+ What we strive to deliver.
+ Co-presenting with Jon and Alex, so targeting 5 to 10 minutes for my part.

---

## Recipe

In repository root, add:
`.pre-commit-config.yaml`:

```yaml
repos:
-   repo: https://github.com/Yelp/detect-secrets
    rev: v1.2.0 # Pinned on 2022.03 after 1.1.0 fixes.
    hooks:
    -   id: detect-secrets
        args: ['--baseline', '.secrets.baseline']
```

???

- pre-commit can clone and setup certain repositories like this one.
- hooks section describes the commands to run.
- revision must always be a tag.

---

## Create Baseline File

Initial secrets audit:
[Install detect-secrets](https://github.com/Yelp/detect-secrets#installation)

```bash
$ detect-secrets scan > .secrets.baseline
$ detect-secrets audit .secrets.baseline
```

Add the baseline to the repostiory:

```bash
$ git add .secrets.baseline .pre-commit-config.yaml 
$ git commit
```

---

## Developer Setup

Each developer should complete these steps.

[Install pre-commit](https://pre-commit.com/#install) then run these commands
 from the repository root:

```bash
$ git pull
$ pre-commit install
```

---

## References

+ [Preventing and Detecting Secret Leaks in GitHub
](https://answers.uillinois.edu/illinois/112664)

---

## Discussion

---

## Install Detect-Secrets on Windows

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install detect-secrets
```

---

## Windows command examples

```powershell
(.venv) $ detect-secrets scan > .secrets.baseline
(.venv) $ cat .\.secrets.baseline
(.venv) $ detect-secrets audit .secrets.baseline
Nothing to audit!
```

</pre>
