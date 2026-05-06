---
title: Test Postgres Age
date: "2026-05-04T00:00:06.284Z"
description: "Test Postgres Age"
---
a docker compose file to get you start with apache age in postgres and a viewer

```
version: '3.7'

services:
  age:
    container_name: age-db
    image: apache/age
    restart: always
    environment:
      POSTGRES_USER: age
      POSTGRES_PASSWORD: age
      POSTGRES_DB: age
    ports:
      - "5432:5432"
    networks:
      - age-network

  age-viewer:
    container_name: age-viewer
    image: skaiworldwide/agviewer
    depends_on:
      - age
    ports:
      - "3000:3000"
    networks:
      - age-network

networks:
  age-network:
    driver: bridge   
```