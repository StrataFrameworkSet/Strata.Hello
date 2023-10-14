import * as React from "react";
import {IApplication} from "strata.client.core/Main";
import {ReactApplication} from 'strata.client.react/Main';
import {IModelStore} from 'strata.client.core/Presenter';
import {ModelStore} from 'strata.client.core/Presenter';
import {HelloWorldModel} from "../Hello/HelloWorldModel";
import {MainModel} from "./MainModel";
import {MainView} from "./MainView";
import {IMainModel} from "./IMainModel";
import {IMainPresenter} from "./IMainPresenter";
import {IMainView} from "./IMainView";
import {MainPresenter} from "./MainPresenter";
import Element = React.JSX.Element;

export
class HelloWorldApplication
    extends ReactApplication<IMainModel,IMainView,IMainPresenter>
    implements IApplication
{
    constructor()
    {
        super();

        let modelstore: IModelStore =
            new ModelStore()
                .insert("Main",new MainModel())
                .insert("HelloWorld",new HelloWorldModel());
        let presenter: IMainPresenter = new MainPresenter(modelstore);

        this.initialize(modelstore,presenter);

    }

    protected getMainView(): Element
    {
        return (<MainView presenter={this.getPresenter()}/>);
    }
}