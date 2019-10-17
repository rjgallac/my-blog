---
title: angular and docker
date: "2017-12-08T00:00:00.284Z"
description: "angular and docker"
---
issuing the following three commands sets up angular through a docker container and serves it on http://localhost:4200/
```
docker run -it --rm -v "$PWD":/app -w /app node:9-alpine npm install @angular/cli
docker run -it --rm -v "$PWD":/app -w /app node:9-alpine node_modules/.bin/ng new my-app --directory ./
docker run -it --rm -p4200:4200 -v "$PWD":/app -w /app node:9-alpine node_modules/.bin/ng serve --host 0.0.0.0 --open
```
