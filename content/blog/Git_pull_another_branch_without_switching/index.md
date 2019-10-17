---
title: Git pull another branch without switching
date: "2019-05-14T00:00:00.284Z"
description: "Git pull another branch without switching"
---
Something I’ve been doing for a long time is stashing a change, swicthing to the develop branch, pulling , switching back to my feature branch, unstashing and then merging. No need to switch, you can just pull in develop without switching.
```
    git pull origin develop:develop
```