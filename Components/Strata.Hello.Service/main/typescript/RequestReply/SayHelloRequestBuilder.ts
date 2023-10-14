import {AbstractServiceRequestBuilder} from "strata.foundation.core/Transfer";
import {SayHelloRequest} from "./SayHelloRequest";

export
class SayHelloRequestBuilder
    extends AbstractServiceRequestBuilder<SayHelloRequest>
{
    private user: string;
    private greeting: string;

    constructor()
    {
        super();
        this.user = null;
        this.greeting = null;
    }

    setUser(user:string): SayHelloRequestBuilder
    {
        this.user = user;
        return this;
    }

    setGreeting(greeting:string): SayHelloRequestBuilder
    {
        this.greeting = greeting;
        return this;
    }

    getUser(): string
    {
        return this.user;
    }

    getGreeting(): string
    {
        return this.greeting;
    }

    build(): SayHelloRequest
    {
        const request: SayHelloRequest =
            {
                requestId: this.getRequestId(),
                timestamp: this.getTimestamp().toString(),
                user: this.getUser(),
                greeting: this.getGreeting()
            };

        return request;
    }
}