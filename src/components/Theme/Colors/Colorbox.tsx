import React from "react";
import styled,{css} from 'styled-components';

type Props={
    height?:string,
    width?:string,
    border?:string,
    backgroundColor:any
}

const Box=styled.div`
height:${(props:Props)=>props.height || '100px'};
width:${(props:Props)=>props.width || '125px'};
background:${(props:Props)=>props.backgroundColor};
border:${(props:Props)=>props.border};
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`


const Colorbox=(props:Props)=>{
    return (
        <Box {...props}></Box>
    )
}

export default Colorbox;