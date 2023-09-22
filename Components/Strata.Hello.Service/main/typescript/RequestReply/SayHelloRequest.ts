import {AbstractServiceRequest}
    from "strata.foundation.core/Transfer/AbstractServiceRequest";

export class SayHelloRequest
    extends AbstractServiceRequest
{
    private user: string;
    private greeting: string;

    constructor()
    {
        super();
        this.user = null;
        this.greeting = null;
    }

    setUser(user:string): SayHelloRequest
    {
        this.user = user;
        return this;
    }

    setGreeting(greeting:string): SayHelloRequest
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

}