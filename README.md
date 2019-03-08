# lockness

Instant verification of certificates on the blockchain

1. Start up Docker

2. Go to desktop/fabrc-dev-servers/
run ```./startFabric.sh```
run ```./createPeerAdminCard.sh```

Install the business network onto the peers
3. composer network install --card PeerAdmin@hlfv1 --archiveFile lockness@0.0.1.bna

Deploys the business network
4. composer network start --networkName lockness --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

Importing network administrator identity as a usable business network card
5. composer card import --file networkadmin.card


Check if it is deployed properly
6. composer network ping --card admin@lockness

Starting RESTFul API
7. composer-rest-server

8. cd my-network && npm i
