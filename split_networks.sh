#!/bin/bash

docker network disconnect rediscrdtdemo_network2 rp1
docker network disconnect rediscrdtdemo_network3 rp1

docker network disconnect rediscrdtdemo_network1 rp2
docker network disconnect rediscrdtdemo_network3 rp2

docker network disconnect rediscrdtdemo_network1 rp3
docker network disconnect rediscrdtdemo_network2 rp3
