import {AbstractServiceReply} from "strata.foundation.core/Transfer/AbstractServiceReply";

export class SayHelloReply
    extends AbstractServiceReply
{
    private greeting: String;

    constructor()
    {
        super();
        this.greeting = null;
    }

    setGreeting(greeting:String): SayHelloReply
    {
        this.greeting = greeting;
        return this;
    }

    getGreeting(): String
    {
        return this.greeting;
    }
}