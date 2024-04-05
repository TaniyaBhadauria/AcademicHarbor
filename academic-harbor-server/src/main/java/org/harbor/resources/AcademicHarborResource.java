package org.harbor.resources;

import com.codahale.metrics.annotation.Timed;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import org.harbor.pojos.Sample;
import java.util.concurrent.atomic.AtomicLong;

@Path("/hello-world")
@Produces(MediaType.APPLICATION_JSON)
public class AcademicHarborResource {
    private final String template;
    private final String defaultName;
    private final AtomicLong counter;

    public AcademicHarborResource(String template, String defaultName) {
        this.template = template;
        this.defaultName = defaultName;
        this.counter = new AtomicLong();
    }

    @GET
    @Timed
    public Sample sayHello(@QueryParam("name") String name) {
        final String value = String.format(template, defaultName);
        return new Sample(counter.incrementAndGet(), value);
    }
}