---
title: Postgres Age Queries
date: "2026-05-04T00:00:06.284Z"
description: "Postgres Age - Userful queries"
---
a docker compose file to get you start with apache age in postgres and a viewer

```
LOAD 'age';

SET search_path = ag_catalog, "$user", public;


--- delete by id
SELECT * 
FROM cypher('graph_name', $$
	MATCH (n) WHERE ID(n) = 844424930132006 DETACH DELETE n
$$) as (e agtype);
```