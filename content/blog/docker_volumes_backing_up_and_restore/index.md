---
title: docker volumes , backing up and restore
date: "2018-02-11T00:00:02.284Z"
description: "docker volumes , backing up and restore"
---
Its useful to be able to restore a database to an original state for integration/end to end testing.

Create a volume using the -v command which link the /var/lib/mysql folder in the container to my local folder /home/bob/dockerdata/mysql
e.g.
```
    docker run -v /home/bob/dockerdata/mysql_sivtest:/var/lib/mysql -p3306:3306 –name sivtest_mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=sivtest -d mysql
```
backup the data by navigating to /home/bob/docker/data and run
```
    sudo tar -cjf mysql_sivtest_archive mysql_sivtest
```

to restore the data you’ll have to stop the container , restore the data and start the container.
```
    docker stop sivtest_mysql
    sudo tar -xvf mysql_sivtest_archive
    docker start sivtest_mysql
```
This is working very well for me