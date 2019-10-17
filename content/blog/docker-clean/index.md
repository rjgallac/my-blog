---
title: Docker – clean up old images
date: "2016-11-01T00:00:00.284Z"
description: "Docker – clean up old images"
---

If you do a > docker images

you might notice a lot of images with the name of none.  I believe these are a load of out of date images. You can clean these up by executing the following on the command line

docker rmi $(docker images -f “dangling=true” -q)

