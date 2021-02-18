#! /bin/bash
npm --production=false install 
cd ./api && npm --production=false install && cd ../
cd ./third_party_app && npm --production=false install && cd ../
cd ./client && npm --production=false install