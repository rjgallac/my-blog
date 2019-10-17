---
title: linux – cpu and memory usage
date: "2018-06-01T00:00:00.284Z"
description: "linux – cpu and memory usage"
---
I was looking to see how much ram and cpu a process was using.  Running a war on a tomcat instance on my hosting was using over a constant 80%.

After looking into a new micro framework micronaut I looked at the ps command and htop but counldn’t isolate the process usage. However the following helped me easily watch the usage.
```
    watch ps -p [PID] -o %cpu,%mem,cmd
```