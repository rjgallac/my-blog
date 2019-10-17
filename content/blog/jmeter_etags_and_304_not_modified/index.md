---
title: jmeter etags and 304 not modified
date: "2018-03-03T00:00:04.284Z"
description: "jmeter etags and 304 not modified"
---
When testing 304 not modified etag using jmeter you need to add http cache manager and tick use cache control/expires headers.

This did kind of work for me however it looked like to was only doing it for every second request.  The solution – update jemeter.   Looks like there may be an issue in 3.1 of jmeter.  I upgraded to version 4 of jmeter and alls good