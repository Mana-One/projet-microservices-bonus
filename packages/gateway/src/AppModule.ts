import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ContractsResolver } from './resolvers/ContractsResolver';
import { SubscriptionsResolver } from './resolvers/SubscriptionsResolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      typePaths: ["./**/*.graphql"]
    }),
  ],
  providers: [ContractsResolver, SubscriptionsResolver]
})
export class AppModule {}