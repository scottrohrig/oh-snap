// import react, @testing-library/ react && jest-dom/extend-expect && Nav
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// configure the testing env
afterEach( cleanup );

