//////////////////////////////////////////////////////////////////////////////
// PlatformModule.java
//////////////////////////////////////////////////////////////////////////////

package strata.hello.server.platform;

import strata.foundation.core.inject.AbstractModule;

public
class PlatformModule
    extends AbstractModule
{
    public
    PlatformModule() {}

    @Override
    protected void
    configure()
    {
        super.configure();
        bind(HelloServiceController.class)
            .in(getDefaultScope());
    }
}

//////////////////////////////////////////////////////////////////////////////
