import React from "react";
import { mount } from "enzyme";
import Root from "../Root";
import App from '../components/App';
import moxios from "moxios";

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.cypress.io/posts', {
        status : 200,
        response : [{ name : 'Fake 1'}, { name: 'Fake 2'}]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comment and display them', () => {
    // Attempt to render the *entire* app
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );
    // find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments').simulate('click');
    // give some time to delay -> to fetch from url
    moxios.wait(() => {
        wrapped.update();
        
        // Expect to find a list of comments!
        expect(wrapped.find('li').length).toEqual(2);
        
        done();
    });
});