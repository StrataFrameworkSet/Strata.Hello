import * as React from "react";
import {IMainPresenter} from "./IMainPresenter";
import {IMainViewProperty} from "./IMainViewProperty";
import {IMainView} from "./IMainView";
import {PresenterView} from "strata.client.react/Presenter";
import {RouteSet} from "./RouteSet";
import {MainNavigationMenuBar} from "./MainNavigationMenuBar";
import {IHelloWorldPresenter} from "../Hello/IHelloWorldPresenter";
import "./MainView.css";
import Element = React.JSX.Element;
import {Box, Container,createTheme,CssBaseline,Theme,ThemeProvider} from "@mui/material";


export 
class MainView
    extends PresenterView<IMainView,IMainPresenter,IMainViewProperty>
    implements IMainView
{
    constructor(props: IMainViewProperty)
    {
        super(props);
    }

    render(): Element
    {
        let presenter: IHelloWorldPresenter =
            this
                .props
                .presenter
                .getHelloWorldPresenter();
        const darkTheme: Theme = createTheme({
            palette: {
                mode: 'dark',
            },
        });

        return (
            <ThemeProvider theme={darkTheme}>
                <Container maxWidth={false} disableGutters={true}>
                    <CssBaseline/>
                    <MainNavigationMenuBar heading="HelloWorld"/>
                    <Box margin={2}>
                        <RouteSet helloWorldPresenter={presenter}/>
                    </Box>
                </Container>
            </ThemeProvider>);
    }

    protected getSelf(): IMainView
    {
        return this;
    }
}