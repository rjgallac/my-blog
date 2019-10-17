---
title: SASS and vuejs
date: "2017-12-10T00:00:00.284Z"
description: "SASS and vuejs"
---
add this to build/webpack.base.conf.js
```
{
test: /\.s[a|c]ss$/,
loader: 'style!css!sass'
}
```
and in your component import yout scss

```
<style lang="scss" >
@import './component1.scss';
</style>
```
However I’m strongly considering the benefits of SASS when using vue components. SASS lets you break up your stylesheets into smaller composable chunks which is pretty much out of the box with vue. Variable substitution is still beneficial, there might be a way to do this in vue too. Time for some investigating me thinks