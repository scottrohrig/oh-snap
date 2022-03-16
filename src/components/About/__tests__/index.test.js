import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// configure testing env
// clean up memory after each global function from jest
afterEach( cleanup );

// describe to declare which component we're testing
describe( 'About component...', () => {
  // renders About test

  // First test
  it( 'renders', () => {
    render( <About /> );
  } );

  // Second test
  it( 'matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render( <About /> );

    expect( asFragment() ).toMatchSnapshot();
  } );
} );
