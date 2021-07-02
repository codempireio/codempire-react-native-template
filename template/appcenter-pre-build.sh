#!/bin/bash
cd ${APPCENTER_SOURCE_DIRECTORY}
echo "WELCOME=${WELCOME}" > .env

echo "DONE APPCENTER"
cat .env