import {SayHelloRequest} from "./SayHelloRequest";
import {SayHelloReply} from "./SayHelloReply";
import {ICompletionStage} from "strata.foundation.core/Concurrent";

export interface IHelloService
{
    sayHello(request:SayHelloRequest): SayHelloReply;

    sayHelloAsync(request: SayHelloRequest): ICompletionStage<SayHelloReply>;
}