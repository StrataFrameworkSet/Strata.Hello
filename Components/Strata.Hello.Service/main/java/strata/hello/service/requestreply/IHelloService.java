//////////////////////////////////////////////////////////////////////////////
// IHelloService.java
//////////////////////////////////////////////////////////////////////////////

package strata.hello.service.requestreply;

import java.util.concurrent.CompletionStage;

public
interface IHelloService
{
    SayHelloReply
    sayHelloSync(SayHelloRequest request);

    CompletionStage<SayHelloReply>
    sayHelloAsync(SayHelloRequest request);
}

//////////////////////////////////////////////////////////////////////////////