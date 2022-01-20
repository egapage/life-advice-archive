import '@testing-library/jest-dom/extend-expect';
import { render , screen} from '@testing-library/react';
import List from './list'

test('renders list', () => {
    render(<List/>)
});
