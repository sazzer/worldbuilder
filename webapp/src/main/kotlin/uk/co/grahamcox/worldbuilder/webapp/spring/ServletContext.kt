package uk.co.grahamcox.worldbuilder.webapp.spring

import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Import

/**
 * The root configuration to use for the Spring Servlet context
 */
@Configuration
@Import(
        WebMvcContext::class,
        GraphQLContext::class,
        ControllersContext::class
)
open class ServletContext {

}
