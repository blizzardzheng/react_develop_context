#!/usr/bin/env bash

sed -e "s/<rootDir>/Users/zhengxinqi/mycodingjob/redux/coding-guide/coding/coding-front-v2/g" src/jestConfig.json.example >! node_modules/.bin/jestConfig.json && ./node_modules/.bin/jest -c node_modules/.bin/jestConfig.jso
n/

# cat .env | head -1 | awk -F '=' '{print $2}' | xargs -I $ sed -e "s/<rootDir>/" + $ + "/g" src/jestConfig.json.example >! node_modules/.bin/jestConfig.json && ./node_modules/.bin/jest -c node_modules/.bin/jestConfig.jso
# n/