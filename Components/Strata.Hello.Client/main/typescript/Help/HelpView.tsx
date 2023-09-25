import * as React from 'react';
import {Component} from 'react';
import Element = React.JSX.Element;
import {Container,Typography} from "@mui/material";

export
class HelpView
    extends Component<any,any>
{
    render(): Element
    {
        return (
            <Container maxWidth={false} disableGutters={true}>
                <Typography variant={'h3'}>Help View</Typography>
            </Container>
        );
    }
}
