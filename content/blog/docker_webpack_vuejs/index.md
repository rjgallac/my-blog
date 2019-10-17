---
title: Another test – docker , webpack and vuejs
date: "2017-12-07T00:00:00.284Z"
description: "Another test – docker , webpack and vuejs"
---

I wondered if I could use docker to prepare, install and run a webpack server inside docker containers. Again without installing node/npm on my machine.

docker run -it --rm -v "$PWD":/app -w /app node:9-alpine npm install vue-cli
This will initialise the project in the current folder. You should see prompts and fill in the detail.
docker run -it --rm -v "$PWD":/app -w /app node:9-alpine node_modules/.bin/vue init webpack .
This will create a default vue project for you in the current folder using the awesome vue cli..

docker run -it --rm -v "$PWD":/app -w /app node:9-alpine npm i
This will install the packages. You should see npm pull down all the related packages specified in the package.json

docker run -it --rm -p8080:8080 -v "$PWD":/app -w /app node:9-alpine npm run start
And this will run up the app on port 8080. Just go to localhost:8080

N.B, you might need to edit package.json and add –host 0.0.0.0 as an option to the webpack-dev-server command

as an added bonus you might want to build the project and package it up into a nginx docker image for running as the webpack dev server is not production ready. Simple create the following Dockerfile
FROM nginx:1.13-alpine
COPY dist /usr/share/nginx/html
then
docker build -t nodevue .
then
docker run --rm -p8080:80 nodevue
then browser to localhost:8080
when you close there should be no evidence that node or nginx was ever on your machine 🙂
