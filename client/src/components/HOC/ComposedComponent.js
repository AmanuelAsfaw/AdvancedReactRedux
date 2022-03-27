import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import withRouter from "./withRoute";

const ComposedComponent = (props) => {
    console.log('props', props);
    const { ChildComponent, history } = props;
    let navigate = useNavigate();

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        if (!props.auth) {
            console.log('I NEED TO LEAVE!!!');
            // history('/signin');            
            navigate('/');
        }
        else{
            console.log('else state');
        }
    },[]);

    return <div>asdf</div>
    return ChildComponent;
}

function mapStateToProps(state) {
    return {
        auth : state.auth.authenticated
    };
}

export default connect(mapStateToProps)(withRouter(ComposedComponent));