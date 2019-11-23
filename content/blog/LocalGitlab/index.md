---
title: Local gitlab and Runners
date: "2019-11-23T00:00:00.284Z"
description: "local gitlab runners"
---
In an attempt to learn gitlab and how to use runners I thought I would try and setup the environments on my laptop so I could experiment.  

To set up a local gitlab is quite simple(you'll need docker install docker). Open a command prompt and enter the following

```
sudo docker run --detach \
  --hostname gitlab.example.com \
  --publish 443:443 --publish 80:80 --publish 22:22 \
  --name gitlab \
  --restart always \
  --volume /srv/gitlab/config:/etc/gitlab \
  --volume /srv/gitlab/logs:/var/log/gitlab \
  --volume /srv/gitlab/data:/var/opt/gitlab \
  gitlab/gitlab-ce:latest
```
Make sure you add gitlab.example.com to your host file so you can browse to http://gitlab.example.com/

You'll then need to create a runner locally. Enter the following on the command prompt.

```
sudo gitlab-runner register
```

You'll be asked a series of questions. You'll get your token from gitlab> admin> runners. 

I created a shell runner and a docker runner.

The last question will ask you to give it a name.  This will be how you reference it from your gitlab-ci.yml file.

Another thing I had to do was configure the gitlab toml file.
```
sudo nano /etc/gitlab-runner/config.toml
```

to get docker runners working I had to add extra host to the runners.docker section.  Also note I up'd the conncurrent to 3 which was previously 1.
```
concurrent = 3
check_interval = 0

[session_server]
  session_timeout = 1800

[[runners]]
  name = "rob-Inspiron-5520"
  url = "http://gitlab.example.com/"
  token = "sY6dhj9QssARP8UWv4Q5"
  executor = "shell"
  [runners.custom_build_dir]
  [runners.cache]
    [runners.cache.s3]
    [runners.cache.gcs]

[[runners]]
  name = "rob-Inspiron-5520"
  url = "http://gitlab.example.com/"
  token = "vqpBor_Psc_zRCQ3arbY"
  executor = "docker"
  [runners.custom_build_dir]
  [runners.docker]
    tls_verify = false
    image = "node:13.1.0-alpine3.10"
    privileged = false
    disable_entrypoint_overwrite = false
    oom_kill_disable = false
    disable_cache = false
    volumes = ["/cache"]
    shm_size = 0
    extra_hosts = ["gitlab.example.com:192.168.0.19"]

```
I created three very simple projects to experiment with running concurrently. 

Two were simple shell scripts that slept for a numbers of seconds and the third was a node project to exercise the 

The simple ones looks like this
```
stages:
  - testshell

testshell:
  stage: testshell
  script:
    - whoami
    - sleep 30
  tags: [robshell]
```
The node ones like this
```
stages:
  - testshell
  - test
cache:
  paths:
    - node_modules/

testshell:
  stage: testshell
  script:
    - whoami
    - sleep 3
  tags: [robshell]

testing:
  image: node:13.1.0-alpine3.10
  stage: test
  script: 
    - whoami
    - npm i
    - npm test
  tags: [robsdocker]
```
