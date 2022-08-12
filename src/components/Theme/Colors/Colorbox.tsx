import React from "react";
import styled,{css} from 'styled-components';

type Props={
    colorKey:string,
    height?:string,
    width?:string,
    border?:string,
    backgroundColor:any
    onColor?:string;
}

const Box=styled.div.attrs(()=>({}))`
height:${(props:Props)=>props.height || '100px'};
position: relative;
text-align:center;
width:${(props:Props)=>props.width || '125px'};
border:${(props:Props)=>props.border};
`

const BoxDetail=styled.h4.attrs((props:Props)=>({
  style:{
    color:props.onColor,
  } 
}))`
position:absolute;
padding:22%;
`;

//Not passing color prop to styled component because this will create 100s of classnames because of the re-renders

const Colorbox=(props:Props)=>{
    return (
        <Box style={{background:props.backgroundColor}} {...props}>
           <div>
            </div>
            <div>
            <BoxDetail {...props}>{props.backgroundColor}</BoxDetail>
            </div>
        </Box>
    )
}

export default Colorbox;