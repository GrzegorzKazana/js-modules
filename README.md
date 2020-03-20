# js-modules

Playground for testing js module types + slideshow

### What is this repo?

This repo was my testing ground for practicing usage and setup of different js module types.
Motivation of such investigation was a desire to gain better understanding of processess that most
contemporary tools abstract from us away, and to solidify the knowledge of differences between popular js build targets
(`cjs`, `amd`, `umd`, `iife`, `esm`, ...).

Along the path of dicovery I also decided to prepare a short slide show on the topic.

### What can I find in here?

`./public` directory - contains examples of usage of different js modules (and lack thereof) inside browser environment.
Examples may be served via `npm run serve:examples`.

`./node` directory - showcases basic usage of `cjs`, `umd`, `esm` in node env.
Examples may be run using `node node/<module_type>/main.(m?js)`, for `esm` `--experimental-modules` may be required.

`./slides` directory - contains a short [Reveal.js](https://github.com/hakimel/reveal.js/) presentation on the topic.
To run, enter the `npm run serve:slides`

### How to run

To serve the examples, use `npm i` and then `npm run serve:examples`.
To view the slideshow, use `npm run install:slides` and `npm run serve:slides`

In order to serve both the examples and the presentation, after installing dependencies, run `npm run start`.
