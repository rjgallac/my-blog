---
title: Node and docker
date: "2017-12-07T00:00:00.284Z"
description: "Node and docker"
---
I don’t tend to install node on my laptop as I don’t want to clutter my machine with a lot of different software.  I like to try stuff out save it to github and forget about it for a few months.  Docker lets me do this.

for example to run a quick node script
```
docker run -p8080:8080 -v "$PWD":/app node:9-alpine node app/console.js
```
console.js
```
console.log("Hello World!");
```
Another example – running a webserver.
```
docker run -p8080:8080 -v "$PWD":/app node:9-alpine node app/webserver.js
```
webserver.js
```
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('Hello World!');
}).listen(8080);
```
