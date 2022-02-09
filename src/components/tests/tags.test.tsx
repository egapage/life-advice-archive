import '@testing-library/jest-dom/extend-expect';
import { render , screen} from '@testing-library/react';
import Tags from '../tags'

test('renders tags', () => {
    render( <Tags 
                tags={
                    [{label: "Test Label", value: "Test Value"}]
                }
            />)
    
    screen.getByText("Test Label")
});
