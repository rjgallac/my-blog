---
title: Node , NPM and docker
date: "2017-12-07T00:00:00.284Z"
description: "Node , NPM and docker"
---
A follow up post. Using the offical node image to install npm packages and run an express app.

docker run -it --rm -v "$PWD":/app -w /app node:9-alpine npm init
The -it takes you to the terminal to fill in the package info. The –rm will remove the container. Once complete you should see a package.json in the local directory.

docker run --rm -v "$PWD":/app -w /app node:9-alpine npm install express body-parser cookie-parser multer --save
The above will install the packages in the local directory.

docker run --rm -p8081:8081 -v "$PWD":/app -w /app node:9-alpine node index.js
The above will run the app and remove the container when finished.

The following is the index.js
var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.send('Hello World');
})
var server = app.listen(8081, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})
