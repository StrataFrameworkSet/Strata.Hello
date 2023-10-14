import {ICompletionStage} from "strata.foundation.core/Concurrent";
import {SayHelloRequest} from "./SayHelloRequest";
import {SayHelloReply} from "./SayHelloReply";

export interface IHelloService
{
    sayHelloAsync(request: SayHelloRequest): ICompletionStage<SayHelloReply>;
}