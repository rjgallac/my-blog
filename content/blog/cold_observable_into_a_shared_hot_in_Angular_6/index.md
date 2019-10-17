---
title: Turn a cold observable into a shared hot in Angular 6
date: "2019-05-14T00:00:01.284Z"
description: "Turn a cold observable into a shared hot in Angular 6"
---
Rather than have multiple backend calls a cold http service call can be turned into a hot shared multiplex service using the following

```
    public doGetSharedProductsService() {
        return this.ProductService.getProducts().pipe(share());
    }
````