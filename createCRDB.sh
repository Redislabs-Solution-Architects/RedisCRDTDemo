# Create the CRDB 
echo "Creating a CRDB"
docker exec -it rp1 /opt/redislabs/bin/crdb-cli crdb create --name mycrdb --memory-size 512mb --port 12000 --replication false --shards-count 1 --causal-consistency false --instance fqdn=cluster1.local,username=r@r.com,password=test --instance fqdn=cluster2.local,username=r@r.com,password=test --instance fqdn=cluster3.local,username=r@r.com,password=test
