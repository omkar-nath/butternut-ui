import { useTheme } from "../Theme";
import React from "react";
import styled from "styled-components";
import ButtonBase from "./ButtonBase";

const ButtonComp = styled(ButtonBase)(({theme}) => ({
    color: `${theme.palette.light.primary}`,
}));

export interface ButtonProps {
    label: string;
}

function Button(props: ButtonProps) {
    console.log('Inside button compo')
    const theme=useTheme();
    return <ButtonComp theme={theme}>{props.label}</ButtonComp>;
}

export default Button;
