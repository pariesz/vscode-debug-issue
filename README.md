
# VSCode debugging with Mocha + Typescript + ESM

Debugging works if the `--experimental-specifier-resolution=node` `runtimeArgs` is removed from `launch.json` and the import in `project.test.ts` changed to `import { TRUE } from "./project.js`. This is a pretty hacky workaround I would rather not do.

`npm test` works using the same `experimental-specifier-resolution=node` option

## Mocha + TypeScript + ESM

https://github.com/mochajs/mocha-examples/issues/47

## VSCode debugging

https://stackoverflow.com/questions/30023736/mocha-breakpoints-using-visual-studio-code

## Error

```
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension "" for C:\Users\peter\Projects\TEMP\node_modules\mocha\bin\_mocha
    at new NodeError (node:internal/errors:400:5)
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:74:9)
    at defaultGetFormat (node:internal/modules/esm/get_format:114:38)
    at defaultLoad (node:internal/modules/esm/load:81:20)
    at nextLoad (node:internal/modules/esm/loader:161:28)
    at C:\Users\peter\Projects\TEMP\node_modules\ts-node\src\esm.ts:255:45
    at async addShortCircuitFlag (C:\Users\peter\Projects\TEMP\node_modules\ts-node\src\esm.ts:409:15)
    at async nextLoad (node:internal/modules/esm/loader:161:22)
    at async ESMLoader.load (node:internal/modules/esm/loader:596:20)
    at async ESMLoader.moduleProvider (node:internal/modules/esm/loader:448:11) {
  code: 'ERR_UNKNOWN_FILE_EXTENSION'
}
Process exited with code 1
```

## Environment

* node: v19.3.0
* npm: 9.2.0