import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Items from './items'

test('renders items', () => {
    render(<Items 
        casts={[]}
    />)

});
