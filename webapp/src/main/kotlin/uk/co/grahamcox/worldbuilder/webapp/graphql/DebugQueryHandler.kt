package uk.co.grahamcox.worldbuilder.webapp.graphql

import graphql.Scalars
import graphql.schema.GraphQLArgument
import graphql.schema.GraphQLFieldDefinition
import graphql.schema.GraphQLObjectType
import graphql.schema.GraphQLOutputType
import org.slf4j.LoggerFactory
import java.time.Clock
import kotlin.collections.listOf

/**
 * Query Handler for returning some debug information
 */
class DebugQueryHandler(private val clock: Clock) : GraphQLQueryHandler {
    /** The logger to use */
    private val LOG = LoggerFactory.getLogger(DebugQueryHandler::class.java)

    /**
     * The name of the query
     */
    override fun queryFieldName(): String = "debug"

    /**
     * The output type produced by the Query Field
     */
    override fun queryFieldType(): GraphQLOutputType =
            GraphQLObjectType.newObject()
                    .name("debug")
                    .field(GraphQLFieldDefinition.newFieldDefinition()
                            .name("version")
                            .type(Scalars.GraphQLString)
                            .staticValue("0.0.1-SNAPSHOT")
                            .build())
                    .field(GraphQLFieldDefinition.newFieldDefinition()
                            .name("now")
                            .type(Scalars.GraphQLString)
                            .dataFetcher {
                                LOG.debug("Resolving the current server time")
                                clock.instant()
                            }
                            .build())
            .build()

    /**
     * The arguments to the Query Field
     */
    override fun queryFieldArguments(): List<GraphQLArgument> = listOf()
}