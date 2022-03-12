import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

const App = () => {
    return (
        <div className="App">
            <CommentBox/>
            <CommentList/>
        </div>
    );
};

export default App;