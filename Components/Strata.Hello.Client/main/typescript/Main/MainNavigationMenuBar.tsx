import * as React from "react";
import {
    INavigationMenuBarPropertySet,NavigationMenuBar,SearchInput
} from "strata.client.mui/Navigation";
import {LoginOrRegisterMenu} from "strata.client.mui/LoginOrRegister";
import {Box,Divider,Stack,Tooltip} from '@mui/material';
import Element = React.JSX.Element;
import {IMenuItemPropertySet} from "strata.client.mui/Navigation/IMenuItemPropertySet";


export
class MainNavigationMenuBar
    extends NavigationMenuBar
{
    constructor(props: INavigationMenuBarPropertySet)
    {
        super(props);
    }

    protected renderControls(): Element
    {
        return (
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <LoginOrRegisterMenu
                    userType={'Guest'}
                    id="main.login-profile"
                    to=""
                    text="guest"
                    selected={false}
                    menubar={this}/>
                <Divider orientation={'vertical'} flexItem={true}/>
                <SearchInput/>
            </Stack>);
    }

    getMenuItems(): Array<IMenuItemPropertySet>
    {
        const menuItems: Array<IMenuItemPropertySet> =
            [
                {
                    userType: 'Guest',
                    id: 'main.home',
                    to: "/home",
                    text: "Home",
                    selected: true
                },
                {
                    userType: 'Guest',
                    id: 'main.hello',
                    to: "/hello",
                    text: "Hello",
                    selected: false
                },
                {
                    userType: 'Guest',
                    id: 'main.help',
                    to: "/help",
                    text: "Help",
                    selected: false
                }
            ];

        return menuItems;
    }
}
