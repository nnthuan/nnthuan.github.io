## How to decompose the application into services?
- [Decompose by business capability](https://microservices.io/patterns/decomposition/decompose-by-business-capability.html)
- [Decompose by verb or use case](https://microservices.io/patterns/decomposition/decompose-by-subdomain.html)
- Decompose by by nouns or resources

Ideally, each service should have only a small set of responsibilities. [Single Responsibility Principle (SRP)](http://www.objectmentor.com/resources/articles/srp.pdf)

## How to maintain data consistency?
- [Saga pattern](https://microservices.io/patterns/data/saga.html)
- [Event Sourcing](https://microservices.io/patterns/data/event-sourcing.html)
- [Transaction Log Tailing](https://microservices.io/patterns/data/transaction-log-tailing.html)

## How to implement queries?
- [API Composition patterns](https://microservices.io/patterns/data/api-composition.html)
- [Command Query Responsibility Segregation (CQRS) pattern](https://microservices.io/patterns/data/cqrs.html)


## Patters
- Decomposition patterns
  - [Decompose by business capability](https://microservices.io/patterns/decomposition/decompose-by-business-capability.html)
  - [Decompose by verb or use case](https://microservices.io/patterns/decomposition/decompose-by-subdomain.html)
  
- The [Database per Service pattern](https://microservices.io/patterns/data/database-per-service.html) describes how each service has its own database in order to ensure loose coupling.
  - Private-tables-per-service – each service owns a set of tables that must only be accessed by that service
  - Schema-per-service – each service has a database schema that’s private to that service
  - Database-server-per-service – each service has it’s own database server.

## References
- https://microservices.io/patterns/microservices.html
