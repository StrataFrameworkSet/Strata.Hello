import {IHelloWorldModel} from "./IHelloWorldModel";
import {AbstractPresenter} from 'strata.client.core/Presenter';
import {IHelloWorldView} from "./IHelloWorldView";
import {IModelStore} from 'strata.client.core/Presenter';
import {IHelloWorldPresenter} from "./IHelloWorldPresenter";
import {Action} from "strata.client.core/Presenter";
import {HelloWorldModel} from "./HelloWorldModel";
import {IHelloService} from "strata.hello.service/RequestReply";
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
        let request: SayHelloRequest =
            new SayHelloRequest()
                .setUser(name)
                .setGreeting(greeting);

        console.log("HelloWorldPresenter.changeModel");
        return this
            .service
            .sayHelloAsync(request)
            .thenApply(
                reply =>
                {
                    console.log("Apply change to hello-world-model");
                    return new HelloWorldModel()
                        .setName(name)
                        .setGreeting(greeting)
                        .setPersonalizedGreeting(reply.getGreeting())
                });
    }
}