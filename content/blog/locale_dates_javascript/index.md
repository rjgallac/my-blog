---
title: Locale dates in javascript
date: "2019-11-6T00:00:00.284Z"
description: "Locale dates in javascript"
---

Seemed to spend a long time on this. Trying to display UTC date from backend in locale time

---- Using plain old javascript

```
newdate= new Date("2019-01-20T19:58:01");
document.write(newdate)
document.write(new Date(Date.UTC(newdate.getYear(), newdate.getMonth(), newdate.getDate(), newdate.getHours(), newdate.getMinutes(), newdate.getSeconds())))
```

---- Using momentjs
```
const momentUTC = "2019-01-20T18:18:01";
document.write("LOCAL: " + moment.utc(momentUTC).local().format("YYYY-MM-DD HH:mm:ss"))

```
