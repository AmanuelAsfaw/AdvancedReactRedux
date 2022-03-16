import React from "react";
import { Route, Routes } from "react-router-dom";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/post" element={<CommentBox/>}/>
                <Route path="/" element={<CommentList/>}/>
            </Routes>            
        </div>
    );
};

export default App;