import * as React from "react";
import styled from "styled-components";

export const StyledButtonBase = styled.button`
 display:inline-flex,
 align-items:center,
 justify-content:center,
 position:relative,
 box-sizing:border-box,
 background-color:transparent,
 outline:0,
 border:0,
 margin:0,
 border-radius:0,
 padding:0,
 cursor:'pointer',
 vertical-align:middle,
 -webkit-appearance:none,
 appearance:none,
 text-decoration:none,
 color:inherit
`;

const ButtonBase = React.forwardRef(function ButtonBase(props: any, ref) {
    const {
        action,
        children,
        component = "button",
        disabled = false,
        onBlur,
        onClick,
        onContextMenu,
        LinkComponent='a',
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

    if (ComponentProp === 'button' && (other.href || other.to)) {
      ComponentProp = LinkComponent;
    }
    const buttonProps : any= {};
    if (ComponentProp === 'button') {
      buttonProps.type = type === undefined ? 'button' : type;
      buttonProps.disabled = disabled;
    } else {
      if (!other.href && !other.to) {
        buttonProps.role = 'button';
      }
      if (disabled) {
        buttonProps['aria-disabled'] = disabled;
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
