echo "Creating clusters"
docker exec -it rp1 /opt/redislabs/bin/rladmin cluster create name cluster1.local username r@r.com password test
docker exec -it rp2 /opt/redislabs/bin/rladmin cluster create name cluster2.local username r@r.com password test
docker exec -it rp3 /opt/redislabs/bin/rladmin cluster create name cluster3.local username r@r.com password test
