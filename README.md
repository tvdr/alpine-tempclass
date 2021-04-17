
# alpine-tempclass
A lightweight alpine.js plugin for assigning temporary css classes form elements

![GitHub file size in bytes](https://img.shields.io/github/size/tvdr/alpine-tempclass/dist/index.js?label=minified&style=flat-square)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/tvdr/alpine-tempclass?label=version&style=flat-square)

## About

When to use?

```html
<div x-data="{}">
</div>
```
```js
function functionName() {
  return {
    foo: 'bar'
  }
}
```
[Demo](url)

## Installation

Include the following `<script>` tag in the `<head>` of your document (before Alpine):

```html
<script src="https://cdn.jsdelivr.net/gh/tvdr/alpine-tempclass@0.x.x/dist/index.js"></script>
```

### Manual

If you wish to create your own bundle:

```bash
npm install tvdr/alpine-tempclass --save
```

Then add the following to your script:

```javascript
import 'alpine-tempclass'
import 'alpinejs'
```

## License

Copyright (c) 2021 Tibor Barta

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.
