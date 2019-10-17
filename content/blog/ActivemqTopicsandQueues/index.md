---
title: Camel and activemq
date: "2017-01-28T00:00:00.284Z"
description: "Camel and activemq"
---

Camel does not seem to want to pick up the broker url when specified in spring boot properties file.

 

instead you have to add it to the url like so

activemq:queue:people.processpeople?trustAllPackages=true&brokerURL=“+activemqBrokerUrl

 

in addition it doesnt pick up the trustAllPackages properties so specify that there as well

