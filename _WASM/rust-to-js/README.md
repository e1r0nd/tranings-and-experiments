# Rust to JS via WASM conversation

## Create Rust package

`cargo init`

`/src/lib.rs` - the main file

`/src/utils.rs` - glue code

## Build Rust project to WASM

`wasm-pack build`

## Create JS page

`npm init wasm-app webpage`

`/webpage/package.json`

```json
{
  "dependencies": {
    "wasm-backend": "file:../pkg"
  },
  "devDependencies": {}
}
```

`npm i`

`npm start`

`/webpage/index.js` - the main JS file

open 127.0.0.1:8080
