#!/bin/bash

# Install Node.js and npm
curl -sL https://rpm.nodesource.com/setup_14.x | bash -
yum install -y nodejs

# Install other dependencies if necessary
# For example, if you are using nginx as a reverse proxy
yum install -y nginx
