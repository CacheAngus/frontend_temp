# lockness

Instant verification of certificates on the blockchain

1. Start up Docker  

Download network dependencies
2. ```cd my-network && npm i```

3. Go to fabrc-dev-servers/
```./startFabric.sh && ./createPeerAdminCard.sh```

4. Install the business network onto the peers  
```composer network install --card PeerAdmin@hlfv1 --archiveFile lockness@0.0.1.bna```

5. Deploys the business network  
```composer network start --networkName lockness --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card```

6. Importing network administrator identity as a usable business network card  
```composer card import --file networkadmin.card```


7. Check if it is deployed properly  
```composer network ping --card admin@lockness```

8. Starting RESTFul API  
```composer-rest-server```
