import React from "react";

const styletest={
    textalign:"center",
    position:"relative",
    height:"100vh",
    background:"#fff",
    lineheight:"100vh"
}

const Spinner = (props) => {
    return(
        <><div style={styletest}>로딩중</div></>
    );
}

export default Spinner;