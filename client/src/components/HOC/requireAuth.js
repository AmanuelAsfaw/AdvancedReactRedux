import React, { Component}  from "react";
import ComposedComponent from "./ComposedComponent";

const requireAuth = (ChildComponent) => {

    const PutChildComponent = () => {
        return <ComposedComponent ChildComponent={ <ChildComponent/> }/>;
    }

    return PutChildComponent;
};

export default requireAuth;