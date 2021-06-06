import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react'
import PayTemplate from '../PayTemplate'
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect';

//clean up
afterEach(()=>cleanup())


//checking the component is loading without crashing
it('renders without crashing',() =>{
    const div = document.createElement('div')
    ReactDOM.render(
           <BrowserRouter>
                <PayTemplate/>
           </BrowserRouter>
    ,div)

})


it('matches snapshot', () =>{
    const tree = renderer.create(
        <BrowserRouter>
        <PayTemplate/>
   </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
    
})