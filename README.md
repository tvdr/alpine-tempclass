
# alpine-tempclass
A lightweight alpine.js plugin for assigning temporary css classes form elements

![GitHub file size in bytes](https://img.shields.io/github/size/tvdr/alpine-tempclass/dist/index.js?label=minified&style=flat-square)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/tvdr/alpine-tempclass?label=version&style=flat-square)

## About

Initial idea was to simply be able to add animation class for elements

```html
<div x-data="{}" @click="$tempclass('animate-bounce')" class="p-5 text-black bg-blue-200 hover:bg-blue-500 hover:text-white shadow-lg rounded-md mb-2">Bounce self <small>(with the minimum config)</small></div>
```
## Usage

By default, `$tempclass` will add classes to self and then remove it after 1000ms.

Accepts 3 parameters:<br/>
A `String` (with space as delimiter for multiple classes) or an `Array`

A `Number` for how long to set the classes (default is 1000)

An `Element` to set as target (default is self)



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
Thanks to [KevinBatdorf](https://github.com/KevinBatdorf) for the [template](https://github.com/KevinBatdorf/alpine-plugin-template)

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.
