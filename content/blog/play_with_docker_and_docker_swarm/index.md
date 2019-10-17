---
title: play with docker and docker swarm
date: "2018-03-30T00:00:00.284Z"
description: "play with docker and docker swarm"
---
Reacquainted myself with docker swarm and followed the offical tutorial here https://docs.docker.com/get-started/. Also following along with this https://www.youtube.com/watch?v=bGYAkFGkUws&t=306s reminded me of the online sandbox https://labs.play-with-docker.com/.  I managed to reproduce the stack from my local on the online sandbox is seconds.  The only issue was with the redis data folder which I fixed by simply mounting the data folder inside the container. The youtube video above talks about using ngrok but the play-with-docker site publishes these ports anyway so didnt see the point.