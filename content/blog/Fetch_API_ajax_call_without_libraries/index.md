---
title: Fetch API – ajax call without libraries
date: "2018-05-04T00:00:01.284Z"
description: "Fetch API – ajax call without libraries"
---
Putting this here as it took me a while to track it down.

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

e.g
```
getAll () {
    console.log("GET ALL")
    return fetch('http://127.0.0.1:8084/customer/', {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        return data;
      });
}
```
or a post
```
addCustomer(customer){
  fetch('http://127.0.0.1:8084/customer/', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
  });
}
```