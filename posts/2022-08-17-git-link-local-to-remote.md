---
title: 'Linking a Local Git Repo to an Existing Remote One'
date: '2022-08-17'
---

A bit of a backstory: I've been working on a Laravel project with two other people. The first one was the original developer, but I was onboarded 
as her replacement. We had an overlap so we were working on the same code base (good practice of basic git commands, too.) The problem was after she left, I and the other remaining member (the project manager / business analyst / QA / developer) didn't have full control of the github repository (the former developer owns it and I just forked it for my updates.) I decided to move (copy) the repo to my own account so the other member and I will have complete control over it.

First, I created a fresh Github repository by publishing my updated local repo. I then created a dev branch for myself and the second team member. The structure is we have a main branch, and 2 branches for each of us.

I don't want the other team member to set up another clone on her machine since she isn't familiar with git. I just wanted to "connect" her local repo to the newly created one in my Github. They are essentially the same because her local repo is up-to-date.

Here's the steps I provided:

1. Go to project folder.
2. Delete .git folder of the local repository.
3. Initialize project folder as git repo:

        $ git init

4. Add a remote:

        $ git remote add origin https://github.com/<username>/<repo>.git

5. Fetch changes:

        $ git fetch

6. Force checkout the branch that I made for the other team member:

        $ git checkout -f dev-<member_name>

The force checkout was needed to make sure the local files get overwritten by the remote ones.

