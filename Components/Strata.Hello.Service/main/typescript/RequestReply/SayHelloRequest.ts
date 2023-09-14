import {AbstractServiceRequest}
    from "strata.foundation.core/Transfer/AbstractServiceRequest";

export class SayHelloRequest
    extends AbstractServiceRequest
{
    private user: String;
    private greeting: String;

    constructor()
    {
        super();
        this.user = null;
        this.greeting = null;
    }

    setUser(user:String): SayHelloRequest
    {
        this.user = user;
        return this;
    }

    setGreeting(greeting:String): SayHelloRequest
    {
        this.greeting = greeting;
        return this;
    }

    getUser(): String
    {
        return this.user;
    }

    getGreeting(): String
    {
        return this.greeting;
    }

}