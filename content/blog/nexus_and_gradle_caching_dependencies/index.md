---
title: nexus and gradle caching dependencies
date: "2018-05-04T00:00:02.284Z"
description: "nexus and gradle caching dependencies"
---
Spent some time wrestling with gradle and a SNAPSHOT dependency. I would push a jar to nexus and try to pull it but it was still using the old dependency.

Every attempt to update index etc in nexus wouldn’t work. I tried going into .gradle/caches/modules/files and deleting all the file for my repo however even that wouldn’t work.

I couldn’t get this to work for me thinking maybe gradle had something to do with it.
```
configurations.all {
    resolutionStrategy {
        cacheDynamicVersionsFor 0, 'seconds'
        cacheChangingModulesFor 0, 'seconds'
    }
```
What did work in the end was that I noticied there was a .gradle/caches/modules/metadata folder.  When I deleted my repo from here and refreshed my dependencies it worked.