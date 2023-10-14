import * as React from 'react';
import {Component} from "react";
import Element = React.JSX.Element;
import {SvgIcon} from "@mui/material";

export
class MainIcon extends Component<any,any>
{
    constructor(props: any)
    {
        super(props);
    }

    render(): Element
    {
        return (
            <SvgIcon fontSize={'large'} sx={{display: {xs:'none', md:'flex'}}}>
                <svg
                    width="100mm"
                    height="100mm"
                    version="1.1"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Logo</title>
                    <g>
                        <path d="m0 0v100h100v-100zm89.417 10.583v80h-80v-0.42736z" fill="#738694" stroke-width=".26458"/>
                        <path d="m11.988 12.744v60h60v-60zm53.65 6.35v48h-48v-0.25642z" fill="#bfccd6" stroke-width=".15875"/>
                    </g>
                </svg>
            </SvgIcon>
        );
    }
}