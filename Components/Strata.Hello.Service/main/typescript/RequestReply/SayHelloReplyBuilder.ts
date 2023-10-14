import {AbstractServiceReplyBuilder} from "strata.foundation.core/Transfer";
import {SayHelloReply} from "./SayHelloReply";

export class SayHelloReplyBuilder
    extends AbstractServiceReplyBuilder<SayHelloReply>
{
    private greeting: string;

    constructor()
    {
        super();
        this.greeting = null;
    }

    setGreeting(greeting:string): SayHelloReplyBuilder
    {
        this.greeting = greeting;
        return this;
    }

    getGreeting(): string
    {
        return this.greeting;
    }

    build(): SayHelloReply
    {
        const reply: SayHelloReply =
            {
                replyId: this.getReplyId(),
                originatingRequestId: this.getOriginatingRequestId(),
                timestamp: this.getTimestamp().toString(),
                success: this.getSuccess(),
                successMessage: this.getSuccessMessage(),
                failureMessage: this.getFailureMessage(),
                exception: this.getException().build(),
                greeting: this.getGreeting()
            };

        return reply;
    }
}