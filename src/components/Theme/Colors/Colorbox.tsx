import React from "react";
import styled from "@emotion/styled";

type Props = {
    colorKey: string;
    height?: string;
    width?: string;
    border?: string;
    backgroundColor: any;
    onColor?: string;
};

const Box = styled.div((props: Props) => ({
    height: props.height || "100px",
    position: "relative",
    textAlign: "center",
    width: props.width || "125px",
    border: props.border,
}));

const BoxDetail = styled.h4((props: Props) => ({
    color: props.onColor,
    position: "absolute",
    padding: "22%",
}));

//Not passing color prop to styled component because this will create 100s of classnames because of the re-renders

const Colorbox = (props: Props) => {
    return (
        <Box style={{ background: props.backgroundColor }} {...props}>
            <div></div>
            <div>
                <BoxDetail {...props}>{props.backgroundColor}</BoxDetail>
            </div>
        </Box>
    );
};

export default Colorbox;
