import {IHelloService} from "strata.hello.service/RequestReply";
import {SayHelloRequest} from "strata.hello.service/RequestReply";
import {SayHelloReply} from "strata.hello.service/RequestReply";
import {ICompletionStage} from "strata.foundation.core/Concurrent";
import {AbstractRestClient} from "strata.client.core/Service";
import {Guid} from "guid-typescript";
import {Instant} from "@js-joda/core";

export
class HelloServiceClient
    extends AbstractRestClient
    implements IHelloService
{
    constructor(baseUrl: string)
    {
        super(baseUrl);
        this.setHeader("Content-Type","application/json");
    }

    sayHelloAsync(request: SayHelloRequest): ICompletionStage<SayHelloReply>
    {
        console.log("HelloServiceClient.sayHelloAsync");
        return this.doPost<SayHelloReply,SayHelloRequest>(
            "say-hello-async",
            this.initializeRequest(request));
    }

    private initializeRequest(request: SayHelloRequest): SayHelloRequest
    {
        console.log("HelloServiceClient.initializeRequest");
        if (request == null)
            request.requestId = Guid.create().toString();

        if (request.timestamp == null)
            request.timestamp = Instant.now().toString();

        return request;
    }
}