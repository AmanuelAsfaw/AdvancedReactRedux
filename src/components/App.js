import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import * as actions from '../actions';

class App extends Component {
    
    renderButton() {
        if (this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuth(false)}>
                    Sign Out
                </button>);
        }
        else{
            return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>;
        }
    }

    renderHeader() {
        return (
            <ul>
                <li>
                    <Link  to="/">Home</Link>
                </li>
                <li>
                    <Link  to="/post">Post A Comment</Link>
                </li>                
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        );
    }
    
    render() {
        return (
            <div className="App">
                { this.renderHeader() }
                <Routes>
                    <Route path="/post" element={<CommentBox {...this.props}/>}/>
                    <Route path="/" element={<CommentList {...this.props}/>}/>
                </Routes>            
            </div>
        );
    }    
};

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(App);