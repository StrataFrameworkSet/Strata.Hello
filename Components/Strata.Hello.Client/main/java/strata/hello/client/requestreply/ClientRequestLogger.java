//////////////////////////////////////////////////////////////////////////////
// ClientRequestLogger.java
//////////////////////////////////////////////////////////////////////////////

package strata.hello.client.requestreply;

import jakarta.ws.rs.client.ClientRequestContext;
import jakarta.ws.rs.client.ClientRequestFilter;
import jakarta.ws.rs.ext.Provider;
import strata.foundation.core.transfer.AbstractServiceRequest;
import strata.hello.service.requestreply.SayHelloRequest;

import java.io.IOException;

@Provider
public
class ClientRequestLogger
    implements ClientRequestFilter
{

    @Override
    public void
    filter(ClientRequestContext context) throws IOException
    {
        if (context.hasEntity() && context.getEntity() instanceof SayHelloRequest request)
        {
            System.out.println("request.getUser() = " + request.getUser());
            System.out.println("request.getGreeting() = " + request.getGreeting());
        }
    }
}

//////////////////////////////////////////////////////////////////////////////
