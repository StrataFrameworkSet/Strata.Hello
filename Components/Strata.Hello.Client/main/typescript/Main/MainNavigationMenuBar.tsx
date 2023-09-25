import * as React from "react";
import {
    INavigationMenuBarPropertySet,NavigationMenu,
    NavigationMenuBar,SearchInput
} from "strata.client.mui/Navigation";
import {LoginOrRegisterMenu} from "strata.client.mui/LoginOrRegister";
import {AppBar, Box,Container,Divider,Stack,Toolbar,Typography} from '@mui/material';
import {SvgIcon} from '@mui/material'
import logo from './logo.svg';
import Element = React.JSX.Element;
import PersonIcon from "@mui/icons-material/Person";


export
class MainNavigationMenuBar
    extends NavigationMenuBar
{
    constructor(props: INavigationMenuBarPropertySet)
    {
        super(props);
    }

    render(): Element
    {
        return (
            <AppBar position={'static'}>
                    <Toolbar
                        disableGutters={true}
                        sx={{justifyContent:'space-between'}}>
                        <Stack direction={'row'} alignItems={'center'} spacing={2} marginLeft={2}>
                            <SvgIcon fontSize={'large'}>
                                <svg width="100mm" height="100mm" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <title>Logo</title>
                                    <g>
                                        <path d="m0 0v100h100v-100zm89.417 10.583v80h-80v-0.42736z" fill="#738694" stroke-width=".26458"/>
                                        <path d="m11.988 12.744v60h60v-60zm53.65 6.35v48h-48v-0.25642z" fill="#bfccd6" stroke-width=".15875"/>
                                    </g>
                                </svg>
                            </SvgIcon>
                            <Typography>HelloWorld</Typography>
                            <Divider orientation={'vertical'} flexItem={true}/>
                            <NavigationMenu id="main.home" to="/home" text="Home" selected={true} menubar={this}/>
                            <NavigationMenu id="main.hello" to="/hello" text="Hello" selected={false} menubar={this}/>
                            <NavigationMenu id="main.help" to="/help" text="Help" selected={false} menubar={this}/>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} spacing={2} marginRight={2}>
                            <LoginOrRegisterMenu
                                id={'main.login-register'}
                                to={''}
                                text={'guest'}
                                startIcon={<PersonIcon/>}
                                selected={false}
                                menubar={this}/>
                            <Divider orientation={'vertical'} flexItem={true}/>
                            <SearchInput/>
                        </Stack>
                    </Toolbar>
            </AppBar>
        );
    }

    protected renderLeft(): Element
    {
        return (
            <Box sx={{justifyContent:'flex-start'}}>
                <SvgIcon>
                    <svg width="100%" height="100%" version="1.1" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                        <title>Logo</title>
                        <g>
                            <path d="m0 0v100h100v-100zm89.417 10.583v80h-80v-0.42736z" fill="#738694" stroke-width=".26458"/>
                            <path d="m11.988 12.744v60h60v-60zm53.65 6.35v48h-48v-0.25642z" fill="#bfccd6" stroke-width=".15875"/>
                        </g>
                    </svg>
                </SvgIcon>
                <Typography>HelloWorld</Typography>
                <Divider/>
                <NavigationMenu id="main.home" to="/home" text="Home" selected={true} menubar={this}/>
                <NavigationMenu id="main.hello" to="/hello" text="Hello" selected={false} menubar={this}/>
                <NavigationMenu id="main.help" to="/help" text="Help" selected={false} menubar={this}/>
            </Box>
        );
            /*
            (<NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading className="app-name">
                    <img className="logo" src={logo} height="35" width="35"/>{this.props.heading}
                </NavbarHeading>
                <NavbarDivider/>
                <NavigationMenu id="main.home" to="/home" text="Home" selected={true} menubar={this}/>
                <NavigationMenu id="main.hello" to="/hello" text="Hello" selected={false} menubar={this}/>
                <NavigationMenu id="main.help" to="/help" text="Help" selected={false} menubar={this}/>
            </NavbarGroup>);

             */
    }

    protected renderRight(): Element
    {
        return (
            <Box sx={{justifyContent:'flex-end'}}>
                <LoginOrRegisterMenu
                    id={'main.login-register'}
                    to={''}
                    text={'guest'}
                    selected={false}
                    menubar={this}/>
                <Divider/>
                <SearchInput/>
            </Box>
        );

        /*
            <NavbarGroup align={Alignment.RIGHT}>
                <LoginAndProfileMenu id="main.login-profile" to="" text="guest" selected={false} menubar={this}/>
                <NavbarDivider/>
                <SearchInput/>
            </NavbarGroup>);

         */
    }

}