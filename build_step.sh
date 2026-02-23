#!/bin/bash

echo "Build script"

# add the commands here
cd backend && rm -rf dist && cd ../frontend && npm install && npm run build && cp -r dist ../backend
cd ../backend && npm install && npm run build