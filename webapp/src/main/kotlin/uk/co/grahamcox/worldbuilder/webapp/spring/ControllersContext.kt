package uk.co.grahamcox.worldbuilder.webapp.spring

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import uk.co.grahamcox.worldbuilder.webapp.DebugController
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
}