//////////////////////////////////////////////////////////////////////////////
// ApplicationModule.java
//////////////////////////////////////////////////////////////////////////////

package strata.hello.server.application;

import strata.foundation.core.inject.AbstractModule;
import strata.hello.service.requestreply.IHelloService;

public
class ApplicationModule
    extends AbstractModule
{
    public
    ApplicationModule() {}

    @Override
    protected void
    configure()
    {
        super.configure();
        bind(IHelloService.class)
            .to(HelloService.class)
            .in(getDefaultScope());
    }
}

//////////////////////////////////////////////////////////////////////////////
