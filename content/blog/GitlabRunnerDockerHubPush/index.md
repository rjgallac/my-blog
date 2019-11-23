---
title: GitlabRunnerDockerHubPush
date: "2019-11-29T00:00:00.284Z"
description: "GitlabRunnerDockerHubPush"
---

To push to your docker hub registry.

```
sudo su
passwd gitlab-runner

```

generate a token on docker hub Account Setings> New Access Token.

Login as the gitlab-runner user 

```
su gitlab-runner
```

and following the instruction docker hub e.g

```
docker login --username rjgallac
```
then enter the password token you generated on git hub
