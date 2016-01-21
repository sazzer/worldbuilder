package uk.co.grahamcox.worldbuilder.webapp.spring

import graphql.Scalars
import graphql.schema.GraphQLArgument
import graphql.schema.GraphQLFieldDefinition
import graphql.schema.GraphQLObjectType
import graphql.schema.GraphQLSchema
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationContext
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import uk.co.grahamcox.worldbuilder.webapp.graphql.ExampleGraphQLQueryHandler
import uk.co.grahamcox.worldbuilder.webapp.graphql.GraphQLQueryHandler
import kotlin.collections.forEach
import kotlin.collections.map

/**
 * Spring Context for the GraphQL Schema
 */
@Configuration
open class GraphQLContext {
    /** Example GraphQL Query Handler  */
    @Bean
    open fun exampleHandler() = ExampleGraphQLQueryHandler()

    /**
     * Build the GraphQL Schema
     */
    @Autowired
    @Bean
    open fun schema(applicationContext: ApplicationContext): GraphQLSchema {
        val queryBuilder = GraphQLObjectType.newObject()
                .name("worldbuilderQuery")

        val queryHandlers = applicationContext.getBeansOfType(GraphQLQueryHandler::class.java)

        queryHandlers.values.map {
            val fieldBuilder = GraphQLFieldDefinition.newFieldDefinition()
                .name(it.queryFieldName())
                .type(it.queryFieldType())
                .dataFetcher(it)
            it.queryFieldArguments().forEach { fieldBuilder.argument(it) }

            fieldBuilder.build()
        }.forEach { queryBuilder.field(it) }

        return GraphQLSchema.newSchema()
                .query(queryBuilder.build())
                .build()
    }
}
