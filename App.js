import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1", {id:"heading"}, "Hello world from react"
);
console.log(heading) //object
const parent = React.createElement(
    "div", {id:"parent"}, 
    [React.createElement(
        "div", {id:"child1", key: "child1"}, [React.createElement(
            "h1", {id:"heading", key: "child2"}, "Hello world from react - h1 tag"
        ), React.createElement(
            "h2", {id:"heading2", key: "child3"}, "Hello world from react - h2 tag"
        )]
    ), React.createElement(
        "div", {id:"child2", key: "child4"}, [React.createElement(
            "h1", {id:"heading", key: "child2"}, "Hello world from react - h1 tag"
        ), React.createElement(
            "h2", {id:"heading2", key: "child3"}, "Hello world from react - h2 tag"
        )]
    )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
