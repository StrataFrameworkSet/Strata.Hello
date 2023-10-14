import {IHelloWorldModel} from "./IHelloWorldModel";
import {AbstractPresenter} from 'strata.client.core/Presenter';
import {IHelloWorldView} from "./IHelloWorldView";
import {IModelStore} from 'strata.client.core/Presenter';
import {IHelloWorldPresenter} from "./IHelloWorldPresenter";
import {Action} from "strata.client.core/Presenter";
import {HelloWorldModel} from "./HelloWorldModel";
import {
    IHelloService,
    SayHelloReply,
    SayHelloRequestBuilder
} from "strata.hello.service/RequestReply";
import {SayHelloRequest} from "strata.hello.service/RequestReply";
import {HelloServiceClient} from "../RequestReply/HelloServiceClient";
import {ICompletionStage} from "strata.foundation.core/Concurrent";

export
class HelloWorldPresenter
    extends AbstractPresenter<IHelloWorldModel,IHelloWorldView>
    implements IHelloWorldPresenter
{
    private service: IHelloService;

    constructor(modelstore?: IModelStore)
    {
        super("HelloWorld",modelstore);
        this.service = new HelloServiceClient("https://localhost:8080/hello-service")
    }

    protected doUpdate(view: IHelloWorldView, model: IHelloWorldModel): void
    {
        view.setPersonalizedGreeting(model.getPersonalizedGreeting());
    }

    submit(): void
    {
        let name: string = this.getView().getName();
        let greeting: string = this.getView().getGreeting();

        this.dispatch(
            new Action<IHelloWorldModel>(
                this.getKey(),
                model => this.changeModel(model,name,greeting)));
    }

    exit(): void
    {
    }

    private changeModel(
        model: IHelloWorldModel,
        name: string,
        greeting: string): ICompletionStage<IHelloWorldModel>
    {
        const request: SayHelloRequest =
            new SayHelloRequestBuilder()
                .setUser(name)
                .setGreeting(greeting)
                .build();

        console.log("HelloWorldPresenter.changeModel");
        return this
            .service
            .sayHelloAsync(request)
            .thenApply(
                (reply: SayHelloReply) =>
                {
                    const model: IHelloWorldModel =
                        new HelloWorldModel()
                            .setName(name)
                            .setGreeting(greeting);

                    console.log("Received reply: " + JSON.stringify(reply));
                    console.log("Apply change to hello-world-model");
                    console.log("reply.getSuccess() == " + reply.success)
                    if (reply.success)
                    {
                        console.log("Say hello - succeeded");
                        model.setPersonalizedGreeting(reply.greeting);
                    }
                    else
                    {
                        console.log("Say hello - failed: " + reply.failureMessage);
                        model.setPersonalizedGreeting(reply.failureMessage);
                    }

                    return model;
                })
            .exceptionally(
                (error: Error) =>
                {
                    const model: IHelloWorldModel =
                        new HelloWorldModel()
                            .setName(name)
                            .setGreeting(greeting);

                    console.log("Received error: " + error);
                    console.log("Apply error to hello-world-model");
                    model.setPersonalizedGreeting(error.message)
                    return model;
                });
    }
}