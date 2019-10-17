---
title: Jest code coverage
date: "2018-03-03T00:00:02.284Z"
description: "Jest code coverage"
---
I was experiencing a lot of frustration with coverage and jest this weekend. I would write tests but the coverage was not going up. Turns out theres a cache.

I tried adding
```
    –no-cache
```
and it would but as soon as I removed the flag I’d be back to square one. There is another option
```
    –clearCache
```
which worked a treat