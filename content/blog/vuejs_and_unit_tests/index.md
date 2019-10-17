---
title: vuejs and unit tests
date: "2018-02-11T00:00:00.284Z"
description: "vuejs and unit tests"
---
Was getting a lot of issues doing unit tests getting errors around vuejs trying to pull in the router and other components. Discovered vue-test-utils which greatly simplifies a lot of the mocking https://vue-test-utils.vuejs.org/en/

You simply your components as follows
```
    const wrapper = mount(Companies)
```

You can print the html like so
```
    console.log(wrapper.html())
```
and expect like so
```
    expect(wrapper.html()).toContain('<div><h1>HOME</h1> <p>Welcome to Your Vue.js App</p></div>')
```
it also has some handy utils that simplify click events
```
    wrapper.find('#addcompany').trigger('click')
```
Router params can be mocked like so

```
    const $route = {
        params: { providerid: '1' },
    }

    const wrapper = mount(Benefits, {
        mocks: {$route}
    })
```
This library has been instrumental in getting my vuejs unit tests working