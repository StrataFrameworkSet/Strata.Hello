//////////////////////////////////////////////////////////////////////////////
// HelloServiceController.java
//////////////////////////////////////////////////////////////////////////////

package strata.hello.server.platform;

import jakarta.inject.Inject;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import strata.hello.service.requestreply.IHelloService;
import strata.hello.service.requestreply.SayHelloReply;
import strata.hello.service.requestreply.SayHelloRequest;

import java.util.concurrent.CompletionStage;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hello-service")
public
class HelloServiceController
{
    private IHelloService implementation;
    private Logger        logger;

    @Inject
    public
    HelloServiceController(IHelloService imp)
    {
        implementation = imp;
        logger = LogManager.getLogger(HelloServiceController.class);
    }

    @GetMapping("/ping")
    public String
    ping()
    {
        logger.info("executing ping");
        return "pong";
    }

    @PostMapping(value = "/say-hello-sync", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody SayHelloReply
    sayHelloSync(@RequestBody SayHelloRequest request)
    {
        logger.info("delegating sayHelloSync to implementation service");
        return implementation.sayHelloSync(request);
    }

    @PostMapping(value = "/say-hello-async",produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody CompletionStage<SayHelloReply>
    sayHelloAsync(@RequestBody SayHelloRequest request)
    {
        logger.info("delegating sayHelloAsync to implementation service");
        return implementation.sayHelloAsync(request);
    }

}

//////////////////////////////////////////////////////////////////////////////
