//////////////////////////////////////////////////////////////////////////////
// SayHelloRequest.java
//////////////////////////////////////////////////////////////////////////////

package strata.hello.service.requestreply;

import strata.foundation.core.transfer.AbstractServiceRequest;

import java.time.Instant;
import java.util.UUID;

public
class SayHelloRequest
    extends AbstractServiceRequest
{
    private String user;
    private String greeting;

    public
    SayHelloRequest()
    {
        super();
        user = null;
        greeting = null;
    }

    @Override
    public SayHelloRequest
    setRequestId(UUID requestId)
    {
        return (SayHelloRequest)super.setRequestId(requestId);
    }

    @Override
    public SayHelloRequest setTimestamp(Instant timestamp)
    {
        return (SayHelloRequest)super.setTimestamp(timestamp);
    }

    public SayHelloRequest
    setUser(String u)
    {
        user = u;
        return this;
    }

    public SayHelloRequest
    setGreeting(String g)
    {
        greeting = g;
        return this;
    }

    public String
    getUser()
    {
        return user;
    }

    public String
    getGreeting()
    {
        return greeting;
    }
}

//////////////////////////////////////////////////////////////////////////////
