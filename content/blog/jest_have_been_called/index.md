---
title: Jest toHaveBeenCalledWith in order multiple times
date: "2019-09-19T00:00:06.284Z"
description: "Jest toHaveBeenCalledWith in order multiple times"
---
Spent some time looking for a way to confirm that my service was called multiple time in the corrcet order. Tried doing a expect over multlpe lines like so.
```
    expect(asdf).toHaveBeenCalledWith(1);
    expect(asdf).toHaveBeenCalledWith(1);
```
but this did not work

however this did work
```
    const spy = spyOn(myService, “myMethod”);
    expect(spy.mock.calls).toEqual([[result1], [result2]]);
```