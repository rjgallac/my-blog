---
title: groking and ELK
date: "2018-03-27T00:00:00.284Z"
description: "groking and ELK"
---
Run into a bit of trouble with logstash and it not processing ERROR level messages from spring boot.   Countless searches turned up nothing. By slowly building up the grok expression it turned out the problem was a rouge space. INFO and DEBUG have two spaces whilst ERROR and WARN have one.  So the end expression is so
```
    "(?<timestamp>%{YEAR}-%{MONTHNUM}-%{MONTHDAY} %{TIME})%{SPACE}%{LOGLEVEL:level} %{NUMBER:pid} --- \[(?<thread>[A-Za-z0-9-]+)\] [A-Za-z0-9.]*\.(?<class>[A-Za-z0-9#_]+)\s*:\s+(?<logmessage>.*)"
```