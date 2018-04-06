#!/bin/bash

JS_SERVICE_URL="https://javascript-minifier.com/raw"
CSS_SERVICE_URL="https://cssminifier.com/raw"

curl -X POST --data-urlencode "input@lgal.js" $JS_SERVICE_URL > lgal.min.js

curl -X POST --data-urlencode "input@lgal.css" $CSS_SERVICE_URL > lgal.min.css
