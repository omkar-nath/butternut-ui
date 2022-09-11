import * as React from "react";
import styled from "@emotion/styled";

type Props = {
    action: any;
    children: React.ReactNode;
    classes: Record<string, string>;
    disabled: boolean;
    component: string;
    href: "a";
    to?: any;
    LinkComponent: string;
    type: "button" | "reset" | "submit";
    onBlur: () => void;
    onClick: () => void;
    onContextMenu: () => void;
    onDragLeave: () => void;
    onFocus: () => void;
    onFocusVisible: () => void;
    onKeyDown: () => void;
    onKeyUp: () => void;
    onMouseDown: () => void;
    onMouseUp: () => void;
    onMouseLeave: () => void;
    onTouchEnd: () => void;
    onTouchMove: () => void;
    onTouchStart: () => void;
    [unknownKey: string]: any;
};

export const StyledButtonBase = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 20;
    padding: 0;
    cursor: pointer;
    vertical-align: middle;
    -webkit-appearance: none;
    appearance: none;
    text-decoration: none;
    color: inherit;
`;

const ButtonBase = React.forwardRef<
    HTMLButtonElement,
    React.PropsWithChildren<Props>
>(function ButtonBase(props, ref) {
    const {
        action,
        children,
        component = "button",
        disabled = false,
        onBlur,
        onClick,
        onContextMenu,
        LinkComponent = "a",
        onDragLeave,
        onFocus,
        onFocusVisible,
        onKeyDown,
        onKeyUp,
        onMouseDown,
        onMouseUp,
        onMouseLeave,
        onTouchEnd,
        onTouchMove,
        onTouchStart,
        type,
        ...other
    } = props;

    let ComponentProp = component;

    if (ComponentProp === "button" && (other.href || other.to)) {
        ComponentProp = LinkComponent;
    }
    const buttonProps: any = {};
    if (ComponentProp === "button") {
        buttonProps.type = type === undefined ? "button" : type;
        buttonProps.disabled = disabled;
    } else {
        if (!other.href && !other.to) {
            buttonProps.role = "button";
        }
        if (disabled) {
            buttonProps["aria-disabled"] = disabled;
        }
    }

    return (
        <StyledButtonBase
            type={type}
            disabled={disabled}
            onBlur={onBlur}
            onClick={onClick}
            onContextMenu={onContextMenu}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onDragLeave={onDragLeave}
            onTouchEnd={onTouchEnd}
            onTouchMove={onTouchMove}
            ref={ref}
            onTouchStart={onTouchStart}
            {...other}
            {...buttonProps}
        >
            {children}
        </StyledButtonBase>
    );
});

export default ButtonBase;
