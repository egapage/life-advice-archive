import '@testing-library/jest-dom/extend-expect';
import { render , screen} from '@testing-library/react';
import Header from '../header'

test('renders header', () => {
    render(<Header/>)
    screen.getByText("Life Advice with Ryen Russillo Archive")
});
