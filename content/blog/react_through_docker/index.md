---
title: and lastly react through docker
date: "2017-12-08T00:00:00.284Z"
description: "and lastly react through docker"
---
```
docker run -it –rm -v “$PWD”:/app -w /app node:9-alpine npm install create-react-app
docker run -it –rm -v “$PWD”:/app -w /app node:9-alpine node_modules/.bin/create-react-app react-app
docker run -it –rm -v “$PWD/react-app”:/app -w /app node:9-alpine npm start
```
Closing leaves no existence of node/npm..

The nice thing about these in a development environment is ensuring everybody is using the same version of node/npm, the docker container ensures the project is built on the same platform i.e. linux for consistency, its pretty lightweight and I can through it away when finished.
