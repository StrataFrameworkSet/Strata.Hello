import {AbstractServiceReply} from "strata.foundation.core/Transfer/AbstractServiceReply";

export class SayHelloReply
    extends AbstractServiceReply
{
    private greeting: string;

    constructor()
    {
        super();
        this.greeting = null;
    }

    setGreeting(greeting:string): SayHelloReply
    {
        this.greeting = greeting;
        return this;
    }

    getGreeting(): string
    {
        return this.greeting;
    }
}