package uk.co.grahamcox.worldbuilder.webapp

import graphql.GraphQL
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
open class GraphQLController(private val graphqlSchema: GraphQLSchema) {
    /** The logger to use */
    private val LOG = LoggerFactory.getLogger(GraphQLController::class.java)

    /**
     * Actually handle a GraphQL Request
     */
    @RequestMapping(method = arrayOf(RequestMethod.POST),
            produces = arrayOf("application/json"),
            consumes = arrayOf("application/graphql"))
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
