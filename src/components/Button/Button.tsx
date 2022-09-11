import { useTheme } from "../Theme";
import React from "react";
import styled from "@emotion/styled";
import ButtonBase from "./ButtonBase";
import { theme } from "./getDefaultTheme";

const ButtonComp = styled(ButtonBase)`
    color: ${({ theme: any }) => theme.palette.light.primary};
`;

type ButtonProps = {
    children: React.PropsWithChildren;
    color?: string;
    component?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    size?: string;
    type?: "button" | "reset" | "submit";
    variant?: string;
    [x: string]: any;
};

const Button = React.forwardRef<
    HTMLButtonElement,
    React.PropsWithChildren<ButtonProps>
>(function Button(props: ButtonProps, ref?: React.MutableRefObject<any>) {
    const {
        children,
        color = "primary",
        component = "button",
        disabled = false,
        fullWidth = false,
        size = "medium",
        type,
        variant = "text",
        ...other
    } = props;
    const theme = useTheme();

    return (
        <ButtonComp ref={ref} theme={theme} {...other}>
            {children}
        </ButtonComp>
    );
});

export default Button;
