---
title: play with docker and open faas
date: "2018-03-30T00:00:01.284Z"
description: "play with docker and open faas"
---
A nice little way to test open faas as well is to use play with docker

[https://labs.play-with-docker.com](https://labs.play-with-docker.com)

start a new session, create an instance and run this
```
    docker swarm init --advertise-addr eth0 && \
    git clone https://github.com/openfaas/faas && \
    cd faas && \
    git checkout 0.7.1 && \
    ./deploy_stack.sh && \
    docker service ls
```