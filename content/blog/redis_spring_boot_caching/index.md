---
title: redis spring boot caching
date: "2018-03-21T00:00:00.284Z"
description: "redis spring boot caching"
---
spent a long time investigating jedis unexpected end of stream issue.  I’m using docker and it turns out spring boot couldn’t see it.  Solved it by adding –net=host for the mean time.