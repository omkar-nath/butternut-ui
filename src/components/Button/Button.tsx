import { useTheme } from "../Theme";
import React from "react";
import styled from "styled-components";
import ButtonBase from "./ButtonBase";

const ButtonComp = styled(ButtonBase)((props) => ({
    color: `${props.theme.palette.light.primary}`,
}));

export interface ButtonProps {
    label: string;
}

function Button(props: ButtonProps) {
    console.log('Inside button compo')
    return <ButtonComp >{props.label}</ButtonComp>;
}

export default Button;
