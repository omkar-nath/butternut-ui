import React from 'react';
import ColorInput from '../Theme/ColorInput';
import "./Button.css";

export interface ButtonProps{
    label:string;
}

const Button = (props:ButtonProps)=>{
    return (<><ColorInput></ColorInput></>);
}

export default Button;