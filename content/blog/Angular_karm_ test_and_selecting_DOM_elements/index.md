---
title: Angular karma test and selecting DOM elements for testing
date: "2019-05-24T00:00:02.284Z"
description: "Angular karma test and selecting DOM elements for testing"
---

using css selectors you can interrogate the DOM.
```
  const liElements = fixture.nativeElement.querySelectorAll(".delete-product");
  expect(liElements.length).toBe(0);
```
or
```
  const addProduct = fixture.nativeElement.querySelector("#add-product");
  expect(addProduct).toBeTruthy();
```