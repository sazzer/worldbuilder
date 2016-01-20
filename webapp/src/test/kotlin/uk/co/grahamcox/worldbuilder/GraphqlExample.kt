package uk.co.grahamcox.worldbuilder

import graphql.GraphQL
import graphql.Scalars
import graphql.schema.GraphQLArgument
import graphql.schema.GraphQLFieldDefinition
import graphql.schema.GraphQLObjectType
import graphql.schema.GraphQLSchema
import org.junit.Test

class GraphqlExample {
    @Test
    fun test() {
        val queryType = GraphQLObjectType.newObject()
                .name("helloWorldQuery")
                .field(GraphQLFieldDefinition.newFieldDefinition()
                        .type(Scalars.GraphQLString)
                        .name("hello")
                        .argument(GraphQLArgument.newArgument()
                                .name("name")
                                .defaultValue("Graham")
                                .type(Scalars.GraphQLString)
                                .build()
                        )
                        .argument(GraphQLArgument.newArgument()
                                .name("id")
                                .defaultValue(1)
                                .type(Scalars.GraphQLInt)
                                .build()
                        )
                        .dataFetcher { it.arguments }
                        .build())
                .build();

        val schema = GraphQLSchema.newSchema()
            .query(queryType)
            .build()

        val result = GraphQL(schema).execute("""
        {
            __schema {
                queryType {
                    name
                }
            }
        }""")
        System.out.println(result.data)
        System.out.println(result.errors)
    }
}
