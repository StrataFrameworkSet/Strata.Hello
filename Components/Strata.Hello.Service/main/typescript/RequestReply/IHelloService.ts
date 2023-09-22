import {SayHelloRequest} from "./SayHelloRequest";
import {SayHelloReply} from "./SayHelloReply";
import {ICompletionStage} from "strata.foundation.core/Concurrent";

export interface IHelloService
{
    sayHelloAsync(request: SayHelloRequest): ICompletionStage<SayHelloReply>;
}