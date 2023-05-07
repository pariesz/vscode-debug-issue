
# VSCode debugging with Mocha + Typescript + ESM

Debugging works if the `--experimental-specifier-resolution=node` `runtimeArgs` is removed from `launch.json` and the import in `project.test.ts` changed to `import { TRUE } from "./project.js`. This is a pretty hacky workaround I would rather not do.

`npm test` works using the same `experimental-specifier-resolution=node` option

## Research

* [typescript with ts-node and ESM support](https://github.com/mochajs/mocha-examples/issues/47)
* [mocha-breakpoints-using-visual-studio-code](https://stackoverflow.com/questions/30023736/mocha-breakpoints-using-visual-studio-code)
* [Make experimental-specifier-resolution=node support extension-less files](https://github.com/nodejs/node/issues/41465)

## Error

```
Error: Failed to load raw source: Format was 'null' and url was 'file:///C:/Users/peter/Projects/TEMP/node_modules/mocha/bin/_mocha''.
    at C:\Users\peter\Projects\TEMP\node_modules\ts-node\src\esm.ts:265:17
    at async addShortCircuitFlag (C:\Users\peter\Projects\TEMP\node_modules\ts-node\src\esm.ts:409:15)
    at async nextLoad (node:internal/modules/esm/loader:161:22)
    at async ESMLoader.load (node:internal/modules/esm/loader:596:20)
    at async ESMLoader.moduleProvider (node:internal/modules/esm/loader:448:11)
    at async link (node:internal/modules/esm/module_job:68:21)
```

## Environment

* node: v19.3.0
* npm: 9.2.0