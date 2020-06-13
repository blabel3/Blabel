---
title: "Snapshots"
date: 2019-08-02T02:15:07-04:00
description: Server application for Dow Jones that takes snapshots of websites to automatically build an archive of how it changes over time. 
image: snapshots-logo.png
draft: false
repo: https://github.com/blabel3/snapshots
---

Throughout my internship at Dow Jones, I worked on a team with Barron's engineers on their live website. This was my first time getting a taste of production-ready software, with multiple servers, staging and testing sites, and a really defined smooth Agile workflow. 

I made edits to their frontend end backend, and also got to make a project all by myself that would solve an issue they were having: they weren't really able to look at older versions of their website. Frequently, they'd want to look at an older version of their site to compare changes over time, and even checking out older code wasn't the best as builds and checkouts were slow, especially with three different sites and some shared code that needs to be in specific versions for each as dev builds aren't always stable. 

To solve that problem, I made a service that would run in their AWS servers at scheduled times that would take a screenshot of their sites to compare with. That's Snapshots! Since it used a headless version of Chrome, it was exactly what the majority of viewers would see when they visited the site. It would take them in a variety of screen sizes too, so every breakpoint was covered. Designers could also use them as a base to start Figma files from easier, without having to screenshot and stitch together a big shot of the page, as Snapshots screenshotted the whole page all the way to the bottom. 

I presented Snapshots to the CEO, CTO, and other tech execs across Dow Jones on the last week of my internship, with a *live demo*! It was nervewracking but I made absolutely sure everything would work, and it went without a hitch and made a much stronger impression. I asked if I could showcase the code I wrote here before leaving the company, and they agreed. SO now it's part of my showcase, and definitely one of the projects I'm most proud of. 