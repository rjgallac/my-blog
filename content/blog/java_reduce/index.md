---
title: java reduce
date: "2019-07-02T00:00:06.284Z"
description: "java reduce"
---
```
    tasks.stream().map(t -> t.getName()).collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
```
A quick way of taking an array of objects and reducing it to a list of string and the count of accurances i.e. a group by.