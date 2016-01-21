package uk.co.grahamcox.worldbuilder.webapp.spring

import graphql.schema.GraphQLSchema
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import uk.co.grahamcox.worldbuilder.webapp.DebugController
import uk.co.grahamcox.worldbuilder.webapp.GraphQLController
import java.time.Clock

/**
 * The configuration to use for the Spring MVC Controllers
 */
@Configuration
open class ControllersContext {
    /**
     * Create the Debug Controller
     * @param clock The clock
     * @return the debug controller
     */
    @Autowired
    @Bean
    open fun debugController(clock: Clock) = DebugController(clock)

    /**
     * Create the GraphQL Controller
     * @param schema The GraphQL schema to use
     * @return the GraphQL Controller
     */
    @Bean
    open fun graphqlController(schema: GraphQLSchema) = GraphQLController(schema)
}
