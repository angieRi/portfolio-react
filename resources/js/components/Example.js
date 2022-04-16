import React from "react";
import ReactDom from "react-dom";

function Example(){
    return <p>Hola React</p>
}

export default Example;
ReactDom.render(<Example />, document.getElementById("root"));
