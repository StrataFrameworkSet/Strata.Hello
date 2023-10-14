import {AbstractServiceReply} from "strata.foundation.core/Transfer";

export
interface SayHelloReply
    extends AbstractServiceReply
{
    greeting: string;

}