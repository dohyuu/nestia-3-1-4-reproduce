reproduce:
```
pnpm i
pnpm run sdk
```

error:
```
Error on "/nestia-3-1-4-reproduce/src/app.controller.ts" file. Check your code.
Error: Error on nestia.core.TypedRoute.Get(): no transform has been configured. Run "npx typia setup" command, or check if you're using non-standard TypeScript compiler like Babel or SWC.
    at NoTransformConfigureError (/nestia-3-1-4-reproduce/node_modules/.pnpm/@nestia+core@3.1.4_@nestia+fetcher@3.1.4_@nestjs+common@9.4.3_@nestjs+core@9.4.3_reflect-meta_iapmiyy37cygugyb72doi4mlte/node_modules/@nestia/core/src/decorators/internal/NoTransformConfigureError.ts:5:10)
    at /nestia-3-1-4-reproduce/node_modules/.pnpm/@nestia+core@3.1.4_@nestia+fetcher@3.1.4_@nestjs+common@9.4.3_@nestjs+core@9.4.3_reflect-meta_iapmiyy37cygugyb72doi4mlte/node_modules/@nestia/core/src/decorators/internal/get_path_and_stringify.ts:30:63
    at /nestia-3-1-4-reproduce/node_modules/.pnpm/@nestia+core@3.1.4_@nestia+fetcher@3.1.4_@nestjs+common@9.4.3_@nestjs+core@9.4.3_reflect-meta_iapmiyy37cygugyb72doi4mlte/node_modules/@nestia/core/src/decorators/internal/get_path_and_stringify.ts:21:44
    at Object.route [as Get] (/nestia-3-1-4-reproduce/node_modules/.pnpm/@nestia+core@3.1.4_@nestia+fetcher@3.1.4_@nestjs+common@9.4.3_@nestjs+core@9.4.3_reflect-meta_iapmiyy37cygugyb72doi4mlte/node_modules/@nestia/core/src/decorators/TypedRoute.ts:90:79)
    at Object.<anonymous> (/nestia-3-1-4-reproduce/src/app.controller.ts:9:15)
    at Module._compile (node:internal/modules/cjs/loader:1368:14)
    at Module.m._compile (/nestia-3-1-4-reproduce/node_modules/.pnpm/ts-node@10.9.2_@types+node@20.12.11_typescript@5.4.2/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1426:10)
    at Object.require.extensions.<computed> [as .ts] (/nestia-3-1-4-reproduce/node_modules/.pnpm/ts-node@10.9.2_@types+node@20.12.11_typescript@5.4.2/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1205:32)
```
