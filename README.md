# Redis CRDT Demo

## How to use the app

## Using the app locally
1. Follow the instructions on https://github.com/redislabsdemo/RedisCRDTDockerScripts to setup a three-node cluster of active-active Redis Enterprise database.

2. Run `npm install` to install all the node modules required for this application.

3. Run multiple instances of the application as follows:
```
export HTTP_PORT=3000; export REDIS_PORT=12000; export REDIS_HOST=localhost; \
   export APP_LOCATION="Atlanta"; \ 
node server.js 3000 12000 Atlanta

export HTTP_PORT=3002; export REDIS_PORT=12002; export REDIS_HOST=localhost; \
   export APP_LOCATION="London"; \ 
node server.js 3002 12002 London

export HTTP_PORT=3004; export REDIS_PORT=12004; export REDIS_HOST=localhost; \
   export APP_LOCATION="London"; \ 
node server.js 3004 12004 Rio
```

1. Open the app on three different browsers with the following URLs:

http://localhost:3000

http://localhost:3002

http://localhost:3004

5. Click on the pictures to increment their counters. Test how the counters work with split and connected networks.


## How to use the app in Docker

1. run single script to start up the environment
```bash
./createall.sh
```
2. shut down environment with
```bash
./cleanup.sh
```
4. Launch a web browser windows to 

[http:/localhost:8080](http:/localhost:8080)

[http:/localhost:8081](http:/localhost:8081)

[http:/localhost:8082](http:/localhost:8082)

5. Click on the pictures to increment their counters. Test how the counters work with split and connected networks.
can use following scripts to split and connect the networks
```bash
./network_connect.sh
./split_networks.sh
```

## How to launch the app in Kubernetes

1. Create an active/active Redis Enteprise database.
   
2. Apply the manifest with the appropriate resources, REDIS_HOST, REDIS_PORT, HTTP_PORT, and APP_LOCATION parameters set. See example crdt_app.yaml
   ``` kubectl apply -f crdt_app.yaml ```


3. Expose service as LoadBalancer
   ``` to be added ```

4. Lunch a web browser to the appropriate LoadBalancer host/IP address.

5. Click on the pictures to increment their counters. Test how the counters work with split and connected networks using firewall changes.
