---
title: SOLR search POC
date: "2017-12-17T00:00:00.284Z"
description: "SOLR search POC"
---

I wanted to set up a quick test to see if I could pass in a user created search lucene search string that would mean users could write their own queries. Seemed simple enough.

I tried using some guides on the web to get me started with spring data solr which was the first hurdle. None of the tutorials I found worked, possibly because of dependency issues. I ended up using spring initializr and specified web and solr. https://start.spring.io/

Next hurdle, I couldn’t see any ways for using spring data CRUD repo to create the query from a passed in string. The CRUD is fine for hard wired queries but not for what I Wanted. Figured I have to go a level down and use the solrclient.

Next issue was converting the solr results into POJOs. This is done via getBeans but I had issues with SOLR and its automatic schema creation. It guesses my strings were all multivalue. So I figured out a way of editing the schema manually and setting the multivalue to false and it works.

heres my repo
https://github.com/rjgallac/solrtest