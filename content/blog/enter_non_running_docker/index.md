---
title: enter non running docker
date: "2018-03-30T00:00:02.284Z"
description: "enter non running docker"
---
add this command to set off an infinite loop giving you time to bash into the container and check the folders etc
```
    -c “while true; do sleep 2; date; done”
```