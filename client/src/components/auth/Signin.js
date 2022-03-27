import React from "react";
import { reduxForm, Field } from 'redux-form';
import { useNavigate } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import * as actions from '../../actions';

const Signin = props => {
    let navigate = useNavigate();
    const { handleSubmit } = props;

    const onSubmit = formProps => {
        props.signin(formProps, () => {
            console.log(props);
            navigate('/feature');
        });
    }
    
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label>Email</label>
                <Field
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                />
            </fieldset>
            <fieldset>
                <label>Password</label>
                <Field
                    name="password"
                    type="password"
                    component="input"
                    autoComplete="none"
                />
            </fieldset>
            <div style={ {color: 'red'}}>{ props.errorMessage }</div>
            <button>Sign Up!</button>
        </form>
    );
}

function mapStateToProps(state){
    return { errorMessage: state.auth.errorMessage };
}

// compose helps to apply multiple Higher Order Component to a single component with more attractive syntax
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
) (Signin);