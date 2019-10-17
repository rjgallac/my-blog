---
title: Angular observable service unit testing
date: "2019-09-18T00:00:06.284Z"
description: "Angular observable service unit testing"
---
Struggled today to write a unit test for an observable. The old jasmine (done) =>{done()} wasn’t doing it for me tried various other methods around the web and nothing worked… hoever this combination did work for me.
```
    import { TestBed, tick, fakeAsync, flush } from "@angular/core/testing";
    import { ToDoService } from "./todo.service";

    ......

    it("test todo service", fakeAsync(() => {
        const toDo = {"name":"test};
        toDoService.addToDo(toDo);
        tick(10000);
        toDoService.todos.subscribe(data => {
        expect(data.length).toBe(1);
        });
        flush();
    }));
```
The important parts are the fakeAsync, tick(1000) and flush();