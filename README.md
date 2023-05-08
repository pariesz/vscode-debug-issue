
# Mocha + Typescript + ESM debugging in VS Code

## Run Instructions

* run `npm i`
* open [project.test.ts](./project.test.ts) in VS Code
* press <kbd>F5</kbd>

The launch configuration uses `${relativeFile}` arg so the test file must be open.

## Research

* [typescript with ts-node and ESM support](https://github.com/mochajs/mocha-examples/issues/47)
* [mocha-breakpoints-using-visual-studio-code](https://stackoverflow.com/questions/30023736/mocha-breakpoints-using-visual-studio-code)
* [Make experimental-specifier-resolution=node support extension-less files](https://github.com/nodejs/node/issues/41465)