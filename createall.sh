docker-compose up -d
echo "compose done"
echo "sleeping 1.5 minutes"
sleep 90
echo "create_clusters"
./create_clusters.sh
echo "connect networks"
./network_connect.sh
echo "create_CRDB"
./createCRDB.sh
echo "done"
