import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './HeaderStyle.css'

class Header extends Component {
    renderLinks() {
        if (this.props.auth) {
            return(
                <div>
                    <Link to="/signout">Sign Out </Link>
                    <Link to="/feature">Feature </Link>
                </div>
            );
        }
        else {
            return(
                <div>
                    <Link to="/signup">Sign Up </Link>
                    <Link to="/signin">Sign In </Link>
                </div>
            );
        }
    }
    
    render() {
        return (
            <div className="header">
                <Link to="/">Redux Auth </Link>
                { this.renderLinks() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
}
export default connect(mapStateToProps)(Header);