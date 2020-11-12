import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);
test('renders without crashing', ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Banner />, div);
})