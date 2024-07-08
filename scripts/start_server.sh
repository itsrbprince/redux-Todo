#!/bin/bash

# Stop the previous process
pkill node

# Start the server
cd /var/www/html
nohup serve -s . > /dev/null 2>&1 &
