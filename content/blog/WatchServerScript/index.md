---
title: Watch Server Script
date: "2019-11-21T00:00:00.284Z"
description: "Watch Server Script"
---

A little script to ping/poll a server until it up before launching into the next stage of the pipeline build.

```
#!/bin/bash
while ! (wget https://REPLACE_SERVER_NAME/ --no-check-certificate -q -O /dev/null)
do
        echo "sleeping";
        sleep 2;
done
```
