#!/bin/bash

SERVICE_URL="https://javascript-minifier.com/raw"

curl -X POST --data-urlencode "input@lgal.js" $SERVICE_URL > lgal.min.js
