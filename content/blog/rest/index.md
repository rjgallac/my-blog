---
title: REST
date: "2018-03-03T00:00:03.284Z"
description: "REST"
---
Made a small realisation this morning. I’ve read up a lot of REST and the background etc. As you know ReST stands for Representational State Transfer. I’ve read about the four levels or what is called the Richard Maturity Model

level 0 – being the swamp of Pox (no order and all chaos)
level 1 – being resources ( /customer/, /order/1 etc)
level 2 – being using verbs correctly (POST, PUT, GET etc)
level 3 – being HATEOAS(hypertext and the Engine of Application State)

The big realisation I made as I code my latest example app was that as I was adding caching and eTags to my spring boot app I was adding the most important element of ReST.  Understanding the levels above was important but more important is to know what it means to be an application at ReST.

An application at ReSt should not be making unnecessary calls to the database and this is where the cache comes in.  An application at Rest should not be returning large payloads to the front end when its not necessary and this is where eTags come in.  As long as you are doing GETs which are meant to be idempotent i.e. the dont change anything there should be little to no activity on the backend.  The application is at ReST.

As soon as a POST is made which are not idempotent ie they do change something then something will be removed from the cache, you will see a database hit , evict and update cache but after that the system should be back at ReST.

There’s still a lot for me to learn in the area but hopefully getting there