#!/bin/bash
docker container run --name travis -itd -p '8080:8080' $(docker image build -t whoisju1/travis . -q) \
&& docker ps | grep "travis"