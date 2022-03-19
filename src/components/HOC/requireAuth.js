import React, { Component}  from "react";
import { connect } from "react-redux";
import withRouter from "./withRoute";

const auth = (ChildComponent) => {
    class ComposedComponent extends Component {
        // Our component just got rendered
        UNSAFE_componentWillMount() {
            console.log(!this.props.auth);
            if (!this.props.auth) {
                console.log('I NEED TO LEAVE!!!');
                console.log(this.props);
                this.props.history('/', { state : this.state });            
            }
            else{
                console.log('else state');
            }
            console.log('componentDidMount');
        }

        // Our component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway();
            console.log('componentDidUpdate');
        }

        shouldNavigateAway() {
            const navigate = this.props.history;
            if (!this.props.auth) {
                console.log('I NEED TO LEAVE!!!');     
                console.log(navigate('/', { replace: true }));   
                return navigate('/', { replace: true });    
            }
            else{
                console.log('else state');
            }
        }
        render() {
            return <ChildComponent {...this.props}/>;
        };
    }

    function mapStateToProps(state) {
        return {
            auth : state.auth
        };
    }

    return connect(mapStateToProps)(withRouter(ComposedComponent));
};

export default auth;