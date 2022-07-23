# Bonus Round for the microservices project  
Students: Paul BARRIE, Paolo MANAOIS, Adem MRIZAK  

## Project structure
```
.
└──packages
    ├── billing/
    ├── contracts/
    └── gateway/
```  
## Description  
+ Billing 
The Billing API that handles the creation of subscriptions when a contract is activated and the listing of a customer's subscriptions  
+ Contracts
The Contracts API that allows the creation of a new contract and its subsequent activation
+ Gateway
The GraphQL server acting as the entrypoint for the system  

Only the Gateway is accessible from the outside: Contracts, Billing, as well as the Kafka installation should not be visible outside the docker network.

### How to use  
```
docker compose up -d
``` 
Then access your local [Playground](http://localhost:8000/graphql), it's that simple !

