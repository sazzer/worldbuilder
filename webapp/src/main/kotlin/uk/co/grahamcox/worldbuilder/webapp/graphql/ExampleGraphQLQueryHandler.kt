package uk.co.grahamcox.worldbuilder.webapp.graphql

import graphql.Scalars
import graphql.schema.*
import kotlin.collections.listOf
import kotlin.collections.mapOf
import kotlin.text.reversed

/**
 * Example GraphQL Query Handler
 */
class ExampleGraphQLQueryHandler : GraphQLQueryHandler {
    /**
     * The name of the Query Field
     */
    override fun queryFieldName(): String = "hello"

    /**
     * The output type produced by the Query Field
     */
    override fun queryFieldType(): GraphQLOutputType = GraphQLObjectType.newObject()
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

    /**
     * The arguments to the Query Field
     */
    override fun queryFieldArguments(): List<GraphQLArgument> = listOf(
            GraphQLArgument.newArgument()
                    .name("name")
                    .defaultValue("Graham")
                    .type(Scalars.GraphQLString)
                    .build(),
            GraphQLArgument.newArgument()
                    .name("id")
                    .defaultValue(1)
                    .type(Scalars.GraphQLInt)
                    .build()
    )

    /**
     * Actually perform the query
     * @param environment The environment to get the query details from
     * @return the result of the query
     */
    override fun get(environment: DataFetchingEnvironment): Any = mapOf(
            "name" to environment.arguments["name"].toString().reversed(),
            "id" to 42
    )
}
