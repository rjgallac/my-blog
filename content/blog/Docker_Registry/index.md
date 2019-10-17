---
title: Docker Registry
date: "2018-01-17T00:00:00.284Z"
description: "Docker Registry"
---
```
mkdir registry_certs

openssl req -newkey rsa:4096 -nodes -sha256 \
-keyout registry_certs/domain.key -x509 -days 356 \
-out registry_certs/domain.cert

put domain.cert here on all clients
/etc/docker/certs.d//ca.cert

docker run -d -p 5000:5000 \
-v `pwd`/registry_certs:/certs \
-e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.cert \
-e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \
–restart=always –name registry registry:2

docker pull hello-world
docker tag hello-world dockreg:5000/hello
docker push dockreg:5000/hello
docker tag hello-world dockreg:5000/hello:1
docker push dockreg:5000/hello:1
```
https://yourserver.com:5000/v2/_catalog
https://dockreg:5000/v2/hello/tags/list