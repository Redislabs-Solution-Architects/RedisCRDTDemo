#!/bin/bash

./split_networks.sh
docker-compose down
./remove_volumes.sh
