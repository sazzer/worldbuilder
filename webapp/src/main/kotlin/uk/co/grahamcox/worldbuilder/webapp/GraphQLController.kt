package uk.co.grahamcox.worldbuilder.webapp

import graphql.GraphQL
import graphql.Scalars
import graphql.schema.GraphQLArgument
import graphql.schema.GraphQLFieldDefinition
import graphql.schema.GraphQLObjectType
import graphql.schema.GraphQLSchema
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody

/**
 * Controller for servicing GraphQL requests
 */
@Controller
@RequestMapping("/api/graphql")
open class GraphQLController {
    /** The logger to use */
    private val LOG = LoggerFactory.getLogger(GraphQLController::class.java)

    /** The GraphQL Schema */
    val graphqlSchema: GraphQLSchema

    init {
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

        graphqlSchema = GraphQLSchema.newSchema()
                .query(queryType)
                .build()
    }

    /**
     * Actually handle a GraphQL Request
     */
    @RequestMapping(method = arrayOf(RequestMethod.POST))
    @ResponseBody
    open fun graphql(@RequestBody query: String) : ResponseEntity<*> {
        LOG.debug("Processing request: {}", query)
        val result = GraphQL(graphqlSchema).execute(query)
        return if (result.data != null) {
            LOG.debug("Returning successful response: {}", result.data)
            ResponseEntity(result.data, HttpStatus.OK)
        } else {
            LOG.debug("Returning error response: {}", result.errors)
            ResponseEntity(result.errors, HttpStatus.BAD_REQUEST)
        }
    }
}