import React, { Component}  from "react";
import { connect } from "react-redux";
import ComposedComponent from "./ComposedComponent";
import withRouter from "./withRoute";

const auth = (ChildComponent) => {

    const PutChildComponent = () => {
        return <ComposedComponent ChildComponent={ <ChildComponent/> }/>;
    }

    return PutChildComponent;
};

export default auth;