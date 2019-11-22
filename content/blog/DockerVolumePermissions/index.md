---
title: Docker Volume Permissions
date: "2019-11-22T00:00:00.284Z"
description: "Docker Volume Permissions "
---

I've struggled recently with outputing results in a docker container.  The files get root permissions and gitlab fails to clean up.  I found this little trick to give the files the user if of the current user.


```
-u `id -u` 
```

e.g
```
docker run --rm -u `id -u` -v  `pwd`/data/:/var/data:z -w="/var/app" --net=host dockerimage:5  commandToRun
```

anything saved to the /va/data folder inside folder will get the owner of whoever ran it.  The group stays as root.
