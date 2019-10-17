---
title: docker host ip
date: "2019-06-04T00:00:04.284Z"
description: "docker host ip"
---
to get the host machine ip in a docker file
```
    DOCKER_HOST=$(ip -4 addr show docker0 | grep -Po 'inet \K[\d.]+')
```
which can then be used with your docker container or in docker compose
```
    --add-host=frontendapp:${DOCKER_HOST} 
```