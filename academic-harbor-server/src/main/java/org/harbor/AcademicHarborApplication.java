package org.harbor;

import io.dropwizard.core.Application;
import io.dropwizard.core.setup.Bootstrap;
import io.dropwizard.core.setup.Environment;

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
    }
}