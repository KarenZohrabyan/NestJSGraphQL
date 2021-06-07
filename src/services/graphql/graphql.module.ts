import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: 'src/schema.gql',
        })
    ]
})
export class GraphqlModule {

}