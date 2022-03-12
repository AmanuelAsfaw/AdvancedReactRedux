
import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

it('shows a comment box', ()=> {
    
    
    // using Enzyme library to test react components
    // documentaion link https://enzymejs.github.io/enzyme/
    /* 
        Enzyme API
            Static
                render the given component and return plain HTML
            Shallow
                render *just* the given component and none of its children
            Full DOM
                render the component and al of its children + let us modify it afterwards
     */

    const wrapped = shallow(<App />);
    expect(wrapped.find(CommentBox).length).toEqual(1 );
});

it('shows a comment list', ()=>{
    const wrapped = shallow(<App/>);
    expect(wrapped.find(CommentList).length).toEqual(1 );
});