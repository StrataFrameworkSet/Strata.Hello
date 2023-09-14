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

        if (request.getGreeting() != null && !request.getGreeting().isEmpty())
            return
                (SayHelloReply)
                    new SayHelloReply(request)
                        .setGreeting(
                            request.getGreeting() + " " +
                                request.getUser())
                        .setSuccess(true);

        return
            (SayHelloReply)
                new SayHelloReply(request)
                    .setSuccess(false)
                    .setFailureMessage("no greeting provided")
                    .setException(
                        new ExceptionData()
                            .setExceptionType(
                                IllegalStateException.class.getCanonicalName())
                            .setExceptionCode(-1)
                            .setExceptionMessage("no greeting provided")
                            .setCause(
                                new ExceptionData()
                                    .setExceptionType(
                                        NoSuchElementException.class.getCanonicalName())
                                    .setExceptionCode(-2)
                                    .setExceptionMessage("no such field: greeting")));
    }

    @Override
    public CompletionStage<SayHelloReply>
    sayHelloAsync(SayHelloRequest request)
    {
        logger.info("executing request (async): " + request.getRequestId());
        logger.info("request.timestamp = " + request.getTimestamp());
        logger.info("request.user = " + request.getUser());
        logger.info("request.greeting = " + request.getGreeting());

        if (request.getGreeting() != null && !request.getGreeting().isEmpty())
            return
                CompletableFuture
                    .supplyAsync(
                        () ->
                            (SayHelloReply)
                                new SayHelloReply(request)
                                    .setGreeting(
                                        request.getGreeting() + " " +
                                            request.getUser())
                                    .setSuccess(true));

        return
            CompletableFuture
                .supplyAsync(
                    () ->
                        (SayHelloReply)
                            new SayHelloReply(request)
                                .setSuccess(false)
                                .setFailureMessage("No greeting provided"));

    }
}

//////////////////////////////////////////////////////////////////////////////
