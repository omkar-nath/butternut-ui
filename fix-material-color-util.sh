#!/usr/bin/bash
find './node_modules/@material/material-color-utilities' -type f -name '*.js' -exec \
sed -Ei '/(import|export)/s/(\x22|\x27)(\.{1,2}\/(([[:alnum:]_-]+|\.{2})\/)*[[:alnum:]_-]+)(\.js)?\1/\1\2.js\1/g' {} +
