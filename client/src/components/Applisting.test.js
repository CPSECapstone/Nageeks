import React from 'react';
import ReactDOM from 'react-dom';
import Applisting from './Applisting';
import renderer from 'react-test-renderer';

import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

test('renders without crashing', ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Applisting />, div);
});

test('matches snapshot', ()=>{
    const tree = renderer.create(<Applisting />).toJSON;
    expect(tree).toMatchSnapshot();
})