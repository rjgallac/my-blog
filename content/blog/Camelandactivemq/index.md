---
title: Activemq Topics and Queues
date: "2017-01-28T00:00:00.284Z"
description: "Activemq Topics and Queues"
---

When working on a quick proof of concept I was going to try to programmatically get camel to multicast to all listening microservices when I stumbled upon the subtle but important difference between queues and topics. Queues will distribute messages to one of the listening services whereas with topics messages will get distributed to all listening services.

[https://github.com/rjgallac/robamq](https://github.com/rjgallac/robamq)

