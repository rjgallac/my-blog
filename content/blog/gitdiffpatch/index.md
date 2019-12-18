---
title: Git diff patch
date: "2019-12-18T00:00:00.284Z"
description: "Git Diff patch"
---

Today wanted to get a diff of the current branch ignoring diffs on the target branch and create a backup patch.

git diff TARGETBRANCH...CURRENTBRANCH > FILE.patch

this seemed to work. replace TARGET BRANCH with the branch that has the commits you want to ignore.  Replace CURRENTBRANCH with the branch you have the commits you want to backup and the FILE will be what you want to name the patch
