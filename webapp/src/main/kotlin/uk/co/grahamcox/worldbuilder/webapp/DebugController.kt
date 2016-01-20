package uk.co.grahamcox.worldbuilder.webapp

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import java.time.Clock

@Controller
@RequestMapping("/api/debug")
open class DebugController(private val clock: Clock) {
    /**
     * Get the current time
     * @return the current time
     */
    @RequestMapping("/now")
    @ResponseBody
    open fun now() = clock.instant()
}
