#!/bin/bash

docker network connect rediscrdtdemo_network2 rp1
docker network connect rediscrdtdemo_network3 rp1

docker network connect rediscrdtdemo_network3 rp2
docker network connect rediscrdtdemo_network1 rp2

docker network connect rediscrdtdemo_network2 rp3
docker network connect rediscrdtdemo_network1 rp3
