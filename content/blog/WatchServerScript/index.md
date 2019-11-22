---
title: Watch Server Script
date: "2019-11-21T00:00:00.284Z"
description: "Watch Server Script"
---



```
#!/bin/bash
while ! (wget https://REPLACE_SERVER_NAME/ --no-check-certificate -q -O /dev/null)
do
        echo "sleeping";
        sleep 2;
done
```
