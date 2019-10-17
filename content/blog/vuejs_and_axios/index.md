---
title: vuejs and axios
date: "2018-02-11T00:00:01.284Z"
description: "vuejs and unit tests"
---
When trying to mock ajax calls I tried moxios however I couldn’t get it to work. I had more success with axios mock adapter https://github.com/ctimmerm/axios-mock-adapter

to mock out a call
```
    import the modules

    import MockAdapter from 'axios-mock-adapter';
    import axios from 'axios'
    and an example would look like

    it('Company mounted 1 company', (done) =>{
        mock = new MockAdapter(axios); 
        mock.onGet('http://127.0.0.1:8082/company/').reply(200, [{"id":1,"name":"company name"}]);
        const wrapper = mount(Companies)
        setTimeout(() => {
        expect(wrapper.findAll('table tr.result').length).toEqual(1)
        done()       
        },0)
    })
```

The set timeout is important as I believe it gives the async call time and the done() is also important as the test will wait until you tell it you’re done.