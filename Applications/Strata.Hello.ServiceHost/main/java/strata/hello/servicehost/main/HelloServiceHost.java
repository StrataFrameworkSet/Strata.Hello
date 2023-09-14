//////////////////////////////////////////////////////////////////////////////
// HelloServiceHost.java
//////////////////////////////////////////////////////////////////////////////

package strata.hello.servicehost.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public
class HelloServiceHost
{
    public static void
    main(String[] args)
    {
        SpringApplication application =
            new SpringApplication(HelloServiceHost.class);

        application.setAdditionalProfiles("production");
        application.run(args);
    }
}

//////////////////////////////////////////////////////////////////////////////
