---
title: Nextjs - basic setup and 
date: "2024-11-08T00:00:01.284Z"
description: "Basic nextjs install instructions"
---
install nest JS Cli
```
npm install -g @nestjs/cli
```

create new project
```
nest new nestjs-task-management
```

```
npm run start:dev
```
goto localhost:3000

create a module
```
nest g module tasks
```

create a controller
```
nest g controller tasks
```
create a service
```
nest g service tasks
```

VALIDATORS
```
npm i class-validator class-transformer
```
ORM
```
npm i typeorm @nestjs/typorm pg
```
