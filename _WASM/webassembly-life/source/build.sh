#!/bin/bash

emcc \
  -o output.js lyff.c \
  -s WASM=1 -s ONLY_MY_CODE=1 -s EXPORTED_FUNCTIONS="['_board_step','_board_init','_board_ref']"
