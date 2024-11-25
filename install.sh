#!/bin/bash

if [[ $(uname -m) == "arm64" ]]; then 
    if [[ -z $(which chromium) ]]; then
        echo "Chromium is not installed. Please install it first."
        exit 1
    fi

    export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
    export PUPPETEER_EXECUTABLE_PATH=$(which chromium)
fi

yarn install --frozen-lockfile
