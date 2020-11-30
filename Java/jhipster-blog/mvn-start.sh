#!/bin/sh

if [ -f .env ] ; then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi

mvn -P-webpack
