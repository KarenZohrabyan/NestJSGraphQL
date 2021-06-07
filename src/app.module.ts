import { Module } from '@nestjs/common';
import { GraphqlModule } from './services/graphql/graphql.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphqlModule,
    UserModule,
  ]
})
export class AppModule {}
