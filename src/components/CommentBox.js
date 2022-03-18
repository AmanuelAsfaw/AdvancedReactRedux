import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
import withRouter from "./HOC/withRoute";

class  CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { comment: '' };
        this.shouldNavigateAway = this.shouldNavigateAway.bind(this);
    }
    state = { comment: '' }
    // Our component just got rendered
    componentDidMount() {
        this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
        this.shouldNavigateAway();
    }

    shouldNavigateAway() {
        if (!this.props.auth) {
            console.log('I NEED TO LEAVE!!!');
            this.props.history('/', { replace: true });            
        }
        else{
            console.log('else state');
        }
    }

    handleChange = event => {
        this.setState({comment: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        // TODO - Call an action creator
        // and save the comment

        this.props.saveComment(this.state.comment)
        this.setState({comment: '' });
    };

    render (){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        
        );
    };
}

function mapStateToProps(state) {
    return {
        auth : state.auth
    };
}
export default connect(mapStateToProps, actions)(withRouter(CommentBox));