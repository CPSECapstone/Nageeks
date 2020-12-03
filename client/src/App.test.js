import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);
test("First snapshot test", ()=>{
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
})
//tutorial for React Testing
//https://www.youtube.com/watch?v=3e1GHCA3GP0