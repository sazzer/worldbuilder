package uk.co.grahamcox.worldbuilder.webapp.spring

import graphql.Scalars
import graphql.schema.GraphQLFieldDefinition
import graphql.schema.GraphQLNonNull
import graphql.schema.GraphQLObjectType
import graphql.schema.GraphQLSchema
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.time.Clock

/**
 * Spring Context for the GraphQL Schema
 */
@Configuration
open class GraphQLContext {
    /**
     * Build the GraphQL Schema
     */
    @Autowired
    @Bean
    open fun schema(clock: Clock): GraphQLSchema {
        val queryBuilder = GraphQLObjectType.newObject()
                .name("worldbuilderQuery")
                .field(GraphQLFieldDefinition.newFieldDefinition()
                        .name("serverTime")
                        .type(GraphQLNonNull(Scalars.GraphQLString))
                        .dataFetcher { clock.instant() }
                        .build())

        return GraphQLSchema.newSchema()
                .query(queryBuilder.build())
                .build()
    }
}
