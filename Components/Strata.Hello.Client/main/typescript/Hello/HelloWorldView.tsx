import * as React from "react";
import {IHelloWorldPresenter} from "./IHelloWorldPresenter";
import {PresenterView} from "strata.client.react/Presenter";
import {IHelloWorldViewProperty} from "./IHelloWorldViewProperty";
import {IHelloWorldView} from "./IHelloWorldView";
import {IHelloWorldViewState} from "./IHelloWorldViewState";
import Element = React.JSX.Element;
import "./HelloWorldView.css";
import {
    Box,
    Button,Card,
    Container,
    FormControl,
    InputAdornment,Stack,SvgIcon,
    TextField,
    Typography
} from "@mui/material";
import FormEvent = React.FormEvent;
import ChangeEvent = React.ChangeEvent;

import PersonIcon from '@mui/icons-material/Person';
import WavingHandIcon from '@mui/icons-material/WavingHand';

export
class HelloWorldView
    extends
        PresenterView<
            IHelloWorldView,
            IHelloWorldPresenter,
            IHelloWorldViewProperty,
            IHelloWorldViewState>
    implements IHelloWorldView
{
    //private handleNameChange = handleStringChange(name => this.setState({name:name}));
    //private handleGreetingChange = handleStringChange(greeting => this.setState({greeting: greeting}));

    constructor(props: IHelloWorldViewProperty)
    {
        super(props);
        this.state = {
            name: "",
            greeting: "",
            personalizedGreeting: "Waiting for input..."
        };
    }

    render(): Element
    {
        return (
            <Container maxWidth={false} disableGutters={true}>
                <Stack spacing={2} direction={'column'}>
                    <Typography variant={'h3'}>Hello World View</Typography>
                    <FormControl className="input-form">
                        <Stack spacing={2} direction={'column'} width={700}>
                            <TextField
                                className="text-input"
                                disabled={false}
                                type="text"
                                size={'medium'}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon/>
                                        </InputAdornment>)}}
                                placeholder="Enter name..."
                                value={this.state.name}
                                onChange={(event) => this.handleNameChange(event)}/>
                            <TextField
                                className="text-input"
                                disabled={false}
                                type="text"
                                size={'medium'}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <WavingHandIcon/>
                                        </InputAdornment>)}}
                                placeholder="Enter greeting..."
                                value={this.state.greeting}
                                onChange={(event) => this.handleGreetingChange(event)}/>
                            <Typography className="greeting-label">{this.state.personalizedGreeting}</Typography>
                            <Button
                                className="submit-button"
                                variant={"outlined"}
                                sx={{textTransform:'none'}}
                                onClick={() =>this.props.presenter.submit()}>Submit</Button>
                        </Stack>
                    </FormControl>
                </Stack>
            </Container>);
    }

    setPersonalizedGreeting(greeting: string): void
    {
        this.setState({personalizedGreeting: greeting});
    }

    getName(): string
    {
        return this.state.name;
    }

    getGreeting(): string
    {
        return this.state.greeting;
    }

    protected handleNameChange(event: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>): void
    {
        const name: string = event.target.value;
        this.setState({name:name});
    }

    protected handleGreetingChange(event: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>): void
    {
        const greeting: string = event.target.value;
        this.setState({greeting:greeting});
    }

    protected getSelf(): IHelloWorldView
    {
        return this;
    }
}