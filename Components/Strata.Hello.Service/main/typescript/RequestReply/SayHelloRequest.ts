import {
    AbstractServiceRequest
} from "strata.foundation.core/Transfer/AbstractServiceRequest";

export
interface SayHelloRequest
    extends AbstractServiceRequest
{
    user: string;
    greeting: string;
}