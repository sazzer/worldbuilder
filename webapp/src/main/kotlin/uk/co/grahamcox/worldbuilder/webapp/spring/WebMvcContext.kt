package uk.co.grahamcox.worldbuilder.webapp.spring

import com.fasterxml.jackson.databind.ObjectMapper
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import org.springframework.http.converter.*
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter

/**
 * The configuration to use for the Spring MVC Configuration
 */
@Configuration
@EnableWebMvc
open class WebMvcContext : WebMvcConfigurerAdapter() {
    /** The logger to use */
    private val LOG = LoggerFactory.getLogger(WebMvcContext::class.java)

    /** The Object Mapper to use */
    @Autowired
    lateinit var objectMapper : ObjectMapper

    /**
     * Configure all of the message converters to use. Specifically we have a custom Jackson converter for JSON
     * @param converters The list of converters to work with
     */
    override fun configureMessageConverters(converters: MutableList<HttpMessageConverter<*>>) {
        LOG.info("Configuring the Message Converters to use")
        // First, add all of the default converters we actually care about
        converters.add(ByteArrayHttpMessageConverter())
        converters.add(StringHttpMessageConverter())
        converters.add(ResourceHttpMessageConverter())
        converters.add(FormHttpMessageConverter())

        // Then our custom ones
        converters.add(MappingJackson2HttpMessageConverter(objectMapper))
    }

    /**
     * Add resource handlers for serving up static files
     */
    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry.addResourceHandler("/api/debug/graphiql/**")
                .addResourceLocations("classpath:/graphiql/")
    }

    /**
     * Add View Controllers to the spring app
     */
    override fun addViewControllers(registry: ViewControllerRegistry) {
        registry.addViewController("/api/debug/graphiql")
                .setViewName("/api/debug/graphiql/index.html")
    }
}
