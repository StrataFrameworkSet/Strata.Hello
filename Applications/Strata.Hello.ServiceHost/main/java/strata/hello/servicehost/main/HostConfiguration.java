//////////////////////////////////////////////////////////////////////////////
// HostConfiguration.java
//////////////////////////////////////////////////////////////////////////////

package strata.hello.servicehost.main;

import org.springdoc.core.models.GroupedOpenApi;
import org.springdoc.core.properties.SpringDocConfigProperties;
import org.springdoc.core.providers.ObjectMapperProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.guice.annotation.EnableGuiceModules;
import strata.foundation.core.inject.AbstractModule;
import strata.foundation.spring.mapper.StrataModelResolver;
import strata.foundation.spring.mapper.StrataObjectMapperProvider;
import strata.hello.server.application.ApplicationModule;
import strata.hello.server.platform.PlatformModule;
import strata.server.spring.inject.RequestScope;
import strata.server.spring.service.ServiceConfiguration;

@Configuration
@EnableGuiceModules
@Import({
    ServiceConfiguration.class,
    SpringDocConfigProperties.class,
    StrataModelResolver.class})
public
class HostConfiguration
{
    static
    {
        AbstractModule.setDefaultScope(new RequestScope());
    }

    @Bean
    public static ApplicationModule
    applicationModule() { return new ApplicationModule(); }

    @Bean
    public static PlatformModule
    platformModule() { return new PlatformModule(); }

    @Bean
    public GroupedOpenApi
    openApi()
    {
        return
            GroupedOpenApi
                .builder()
                .group("Hello")
                .pathsToMatch("/hello-service/**")
                .packagesToScan("strata.hello.server.platform")
                .build();
    }

    @Bean
    public ObjectMapperProvider
    objectMapperProvider(SpringDocConfigProperties properties)
    {
        return new StrataObjectMapperProvider(properties);
    }

}

//////////////////////////////////////////////////////////////////////////////
