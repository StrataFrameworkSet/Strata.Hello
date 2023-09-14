//////////////////////////////////////////////////////////////////////////////
// SayHelloReply.java
//////////////////////////////////////////////////////////////////////////////

package strata.hello.service.requestreply;

import strata.foundation.core.transfer.AbstractServiceReply;
import strata.foundation.core.transfer.ExceptionData;

import java.time.Instant;
import java.util.UUID;

public
class SayHelloReply
    extends AbstractServiceReply
{
    private String greeting;

    public
    SayHelloReply()
    {
        super();
        greeting = null;
    }

    public
    SayHelloReply(SayHelloRequest originatingRequest)
    {
        super(originatingRequest);
        greeting = null;
    }

    @Override
    public SayHelloReply
    setReplyId(UUID replyId)
    {
        return (SayHelloReply)super.setReplyId(replyId);
    }

    @Override
    public SayHelloReply
    setOriginatingRequestId(UUID requestId)
    {
        return (SayHelloReply)super.setOriginatingRequestId(requestId);
    }

    @Override
    public SayHelloReply
    setTimestamp(Instant timestamp)
    {
        return (SayHelloReply)super.setTimestamp(timestamp);
    }

    @Override
    public SayHelloReply
    setSuccess(boolean success)
    {
        return (SayHelloReply)super.setSuccess(success);
    }

    @Override
    public SayHelloReply
    setSuccessMessage(String successMessage)
    {
        return (SayHelloReply)super.setSuccessMessage(successMessage);
    }

    @Override
    public SayHelloReply
    setFailureMessage(String failureMessage)
    {
        return (SayHelloReply)super.setFailureMessage(failureMessage);
    }

    @Override
    public SayHelloReply
    setException(ExceptionData exception)
    {
        return (SayHelloReply)super.setException(exception);
    }

    public SayHelloReply
    setGreeting(String g)
    {
        greeting = g;
        return this;
    }

    public String
    getGreeting()
    {
        return greeting;
    }

}

//////////////////////////////////////////////////////////////////////////////
