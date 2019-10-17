---
title: Keycloak
date: "2018-05-20T00:00:02.284Z"
description: "Keycloak"
---

I’ve been recommended keycloak as a single sign on solution.  Thought I would have a look into it this weekend.  Found a simple tutorial here for implementing it in Spring boot first of all using freemarker and locking down the the tomcat container using keycloak and then using spring security.  I should have stopped there.

I then tried to freestyle and use javascript to connect to the rest endpoints and I was met with my old friend CORS and access-control-allow-origin error on the front end. I spent about 30 mins getting keycloak working and as soon as I seen the CORS error I knew I was in for a very long night. About five hours later messing about with CORS in keycloak and spring boot and the front end I realise I was trying to use the same client for locking down both the front end and the backend. I release I can make another client for the ReST backend and set its access type to bearer only.  And I would have another client thats access type is public for the angular front end.