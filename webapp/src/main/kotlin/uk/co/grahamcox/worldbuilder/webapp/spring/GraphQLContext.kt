package uk.co.grahamcox.worldbuilder.webapp.spring

import graphql.Scalars
import graphql.schema.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationContext
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import uk.co.grahamcox.worldbuilder.webapp.graphql.DebugQueryHandler
import uk.co.grahamcox.worldbuilder.webapp.graphql.ExampleGraphQLQueryHandler
import uk.co.grahamcox.worldbuilder.webapp.graphql.GraphQLQueryHandler
import java.time.Clock
import kotlin.collections.forEach
import kotlin.collections.map
import kotlin.collections.mapOf

/**
 * Spring Context for the GraphQL Schema
 */
@Configuration
open class GraphQLContext {
    /** Example GraphQL Query Handler  */
    @Bean
    open fun exampleHandler() = ExampleGraphQLQueryHandler()

    /**
     * Query Handler for Debug information
     */
    @Autowired
    @Bean
    open fun debugHandler(clock: Clock) = DebugQueryHandler(clock)

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
            it.queryFieldArguments().forEach { fieldBuilder.argument(it) }

            if (it is DataFetcher) {
                fieldBuilder.dataFetcher(it)
            } else {
                // No Data Fetcher, so just fetch an empty map.
                // This assumed that each output field can fetch themselves
                fieldBuilder.dataFetcher { mapOf<String, String>() }
            }

            fieldBuilder.build()
        }.forEach { queryBuilder.field(it) }

        return GraphQLSchema.newSchema()
                .query(queryBuilder.build())
                .build()
    }
}
