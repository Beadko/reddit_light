import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import TestHook from './util/TestHook.js';
import {render, fireEvent, cleanup} from '@testing-library/react';
import App from './App.js'

afterEach(cleanup)
// it renders App without crashing
it('Text in state is changed when button clicked', () => {
    const { getByText } = render(<TestHook />);

    expect(getByText(/Initial/i).textContent).toBe("Initial State")

    fireEvent.click(getByText("State Change Button"))

    expect(getByText(/Initial/i).textContent).toBe("Initial State Changed")
 });

