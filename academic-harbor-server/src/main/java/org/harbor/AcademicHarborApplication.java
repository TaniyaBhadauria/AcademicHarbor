package org.harbor;

import io.dropwizard.core.Application;
import io.dropwizard.core.setup.Bootstrap;
import io.dropwizard.core.setup.Environment;
import jakarta.servlet.DispatcherType;
import jakarta.servlet.FilterRegistration;
import org.eclipse.jetty.servlets.CrossOriginFilter;
import org.harbor.resources.AcademicHarborResource;

import java.util.EnumSet;

public class AcademicHarborApplication extends Application<AcademicHarborConfig> {
    public static void main(String[] args) throws Exception {
        new AcademicHarborApplication().run(args);
    }

    @Override
    public String getName() {
        return "hello-world";
    }

    @Override
    public void initialize(Bootstrap<AcademicHarborConfig> bootstrap) {
        // nothing to do yet
    }

    @Override
    public void run(AcademicHarborConfig configuration, Environment environment) {
        // nothing to do yet
        final FilterRegistration.Dynamic cors = environment.servlets().addFilter("CORS", CrossOriginFilter.class);

        // Configure CORS parameters
        cors.setInitParameter(CrossOriginFilter.ALLOWED_ORIGINS_PARAM, "*"); // Allow requests from any origin
        cors.setInitParameter(CrossOriginFilter.ALLOWED_HEADERS_PARAM, "X-Requested-With,Content-Type,Accept,Origin");
        cors.setInitParameter(CrossOriginFilter.ALLOWED_METHODS_PARAM, "OPTIONS,GET,PUT,POST,DELETE,HEAD");

        // Add URL mapping
        cors.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");

        AcademicHarborResource resource = new AcademicHarborResource();
        environment.jersey().register(resource);
    }
}