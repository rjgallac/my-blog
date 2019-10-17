---
title: Angular Karma test
date: "2019-05-24T00:00:01.284Z"
description: "Angular Karma test"
---
How to test and mock services in karma and spy on service using jasmine
```
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TestService} from './test.service';
import { DebugElement } from '@angular/core';


describe('AppComponent', () => {
  let testService: TestService;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    testService = debugElement.injector.get(TestService);

  }));



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angest!');
    expect(compiled.querySelector('h3').textContent).toContain('hi');
  });

  it('should rend', () => {
    spyOn(testService, 'getHi').and.returnValue("hi ho");
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('hi ho');
  });


});
```