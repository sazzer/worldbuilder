package uk.co.grahamcox.worldbuilder.webapp.spring

import graphql.Scalars
import graphql.schema.GraphQLArgument
import graphql.schema.GraphQLFieldDefinition
import graphql.schema.GraphQLObjectType
import graphql.schema.GraphQLSchema
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

/**
 * Spring Context for the GraphQL Schema
 */
@Configuration
open class GraphQLContext {
    /**
     * Build the GraphQL Schema
     */
    @Bean
    open fun schema(): GraphQLSchema {
        val objectType = GraphQLObjectType.newObject()
                .name("hello")
                .field(GraphQLFieldDefinition.newFieldDefinition()
                        .name("name")
                        .type(Scalars.GraphQLString)
                        .build()
                )
                .field(GraphQLFieldDefinition.newFieldDefinition()
                        .name("id")
                        .type(Scalars.GraphQLInt)
                        .build()
                )
                .build()

        val queryType = GraphQLObjectType.newObject()
                .name("helloWorldQuery")
                .field(GraphQLFieldDefinition.newFieldDefinition()
                        .type(objectType)
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

        return GraphQLSchema.newSchema()
                .query(queryType)
                .build()
    }
}
