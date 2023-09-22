//////////////////////////////////////////////////////////////////////////////
// GreeterService.java
//////////////////////////////////////////////////////////////////////////////

package strata.hello.server.application;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import strata.foundation.core.transfer.ExceptionData;
import strata.hello.service.requestreply.IHelloService;
import strata.hello.service.requestreply.SayHelloReply;
import strata.hello.service.requestreply.SayHelloRequest;

import java.util.NoSuchElementException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;


public
class HelloService
    implements IHelloService
{
    private Logger logger;

    public
    HelloService()
    {
        logger = LogManager.getLogger(HelloService.class);
    }

    @Override
    public SayHelloReply
    sayHelloSync(SayHelloRequest request)
    {
        logger.info("executing request (sync): " + request.getRequestId());
        logger.info("request.timestamp = " + request.getTimestamp());
        logger.info("request.user = " + request.getUser());
        logger.info("request.greeting = " + request.getGreeting());

        try
        {
            validate(request);
            return
                new SayHelloReply(request)
                    .setGreeting(
                        request.getGreeting() + " " +
                            request.getUser())
                    .setSuccess(true);
        }
        catch (ValidationException exception)
        {
            return
                new SayHelloReply(request)
                    .setSuccess(false)
                    .setFailureMessage(exception.getMessage())
                    .setException(
                        new ExceptionData()
                            .setExceptionType(exception.getClass().getCanonicalName())
                            .setExceptionCode(-1)
                            .setExceptionMessage(exception.getMessage()));

        }
    }

    @Override
    public CompletionStage<SayHelloReply>
    sayHelloAsync(SayHelloRequest request)
    {
        logger.info("executing request (async): " + request.getRequestId());
        logger.info("request.timestamp = " + request.getTimestamp());
        logger.info("request.user = " + request.getUser());
        logger.info("request.greeting = " + request.getGreeting());

        try
        {
            validate(request);
            return
                CompletableFuture.supplyAsync(
                    () ->
                        new SayHelloReply(request)
                            .setGreeting(
                                request.getGreeting() + " " +
                                    request.getUser())
                            .setSuccess(true));
        }
        catch (ValidationException exception)
        {
            return
                CompletableFuture.supplyAsync(
                    () ->
                        new SayHelloReply(request)
                            .setSuccess(false)
                            .setFailureMessage(exception.getMessage())
                            .setException(
                                new ExceptionData()
                                    .setExceptionType(exception.getClass().getCanonicalName())
                                    .setExceptionCode(-1)
                                    .setExceptionMessage(exception.getMessage())));

        }
    }

    protected void
    validate(SayHelloRequest request)
        throws ValidationException
    {
        if (request.getUser() == null)
            throw new ValidationException("request.user must be non-null");

        if (request.getGreeting() == null)
            throw new ValidationException("request.greeting must be non-null");

    }
}

//////////////////////////////////////////////////////////////////////////////
