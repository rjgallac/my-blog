---
title: Virtualbox
date: "2019-06-05T00:00:04.284Z"
description: "Virtualbox"
---
My current style of working is use my IDE in windows and connect to docker containers running in virtual box(As I’ve not had much joy with docker in windows). To control the virtual box I’ll ssh into it so I can see what the docker containers are doing etc.To start a vm in headless mode run the following from windows command line
```
    vboxmanage startvm  "ubuntu dev" --type headless
```
this will start up the virtual box machine. I can then ssh into it from windows and do docker-compose up. Use tmux to give you more windows in one terminal. This way the only window open is potentially your IDE and a bash shell.

You could get an even cleaner desktop by running the terminal from your idea but tmux in a small terminal window in your IDE isn’t a great experience.