import React from 'react';
import ColorInput from '../Theme/ColorInput';
import "./Button.css";

export interface ButtonProps{
    label:string;
}

const Button = (props:ButtonProps)=>{
    return (<><ColorInput></ColorInput><button>{props.label}</button></>);
}

export default Button;