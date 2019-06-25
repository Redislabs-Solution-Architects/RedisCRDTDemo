# Redis CRDT Demo - _Project Deathstar_

This is the same as the normal Redis CRDT Demo except with Star Wars planets and an exploding Alderaan.

## How to use the app

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
1. Follow the instructions on https://github.com/redislabsdemo/RedisCRDTDockerScripts to setup a three-node cluster of active-active Redis Enterprise database which are exposed on local machine ports 12000, 12002, 12004.
   
2. Build the image: `docker build -t redis_crdt_docker .`
   
3. Launch the image appropriate command line arguments: 
    ```
    # first container
    docker run -d --name crdtapp1 -p 8080:3000 -e REDIS_HOST=host.docker.internal \ 
      -e REDIS_PORT=12000 -e APP_LOCATION="California"  redis_crdt_docker

    # second container
    docker run -d --name crdtapp2 -p 8081:3000 -e REDIS_HOST=host.docker.internal \
       -e REDIS_PORT=12002 -e APP_LOCATION="Oregon"  redis_crdt_docker
    
    # third container
    docker run -d --name crdtapp3 -p 8082:3000 -e REDIS_HOST=host.docker.internal \ 
      -e REDIS_PORT=12004 -e APP_LOCATION="Ohio"  redis_crdt_docker
    ```

4. Launch a web browser windows to 

[http:/localhost:8080](http:/localhost:8080)

[http:/localhost:8081](http:/localhost:8081)

[http:/localhost:8082](http:/localhost:8082)

5. Click on the pictures to increment their counters. Test how the counters work with split and connected networks. Alderaan (middle) will explode on 42 clicks.


_ToDo: Add yaml for Kubernetes_