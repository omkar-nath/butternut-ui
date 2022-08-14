import React from 'react';
import styled from 'styled-components';

const ButtonComp = styled('button')`
    font-size:30px
`

export interface ButtonProps{
    label:string;
}

const Button = (props:ButtonProps)=>{
    return (<ButtonComp>{props.label}</ButtonComp>);
}

export default Button;