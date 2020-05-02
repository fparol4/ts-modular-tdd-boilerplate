#!/bin/bash
set -e
cd ~/assessment-api
echo "Getting the new code..."

git fetch origin
git reset --hard
git checkout master
git pull origin master

echo "Building and running the new docker image"
sudo docker image prune -a -f
sudo docker ps -a | grep adaptive-backend-container && sudo docker rm -f adaptive-backend-container
sudo docker build -t adaptive-backend-image . 
sudo docker run -d -p 80:3000 --restart always --name adaptive-backend-container adaptive-backend-image

