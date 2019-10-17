---
title: Yak Shaving
date: "2018-03-24T00:00:00.284Z"
description: "Yak Shaving"
---
Talk about shaving a yak.  I created a tool to analysis spring bean dependencies.  It worked fine on a simple test app I created and produced a nice Directed graph.  Ok, so I wanted to try it on a semi real app I created however it wasn’t working. I realised it the actuator /beans endpoints had a different formatted json output which I realise must be a version difference of spring.  So I thought I’ll just rewrite the node app that outputs the json in the required format for D3js.  Ok,  30 mins later I think instead of this I’ll upgrade my semi real app to spring 2.  3 hrs later after writing the app so its uses the new repo methods getById , the native queries needed changing from using mappers to projections, updating flyway, updating my tests, fixing caching.

I forget what the hell I was trying to do in the first place.