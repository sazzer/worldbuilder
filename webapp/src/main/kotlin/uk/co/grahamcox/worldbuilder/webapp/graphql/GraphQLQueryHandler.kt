package uk.co.grahamcox.worldbuilder.webapp.graphql

import graphql.schema.DataFetcher
import graphql.schema.GraphQLArgument
import graphql.schema.GraphQLOutputType

/**
 * Interface describing a GraphQL Query Handler.
 * This explicitly exposes all of the information needed to actually build the Query Field.
 * If this extends DataFetcher, this acts as the actual handler for the query as well.
 */
interface GraphQLQueryHandler {
    /**
     * The name of the Query Field
     */
    fun queryFieldName(): String

    /**
     * The output type produced by the Query Field
     */
    fun queryFieldType(): GraphQLOutputType

    /**
     * The arguments to the Query Field
     */
    fun queryFieldArguments(): List<GraphQLArgument>
}
