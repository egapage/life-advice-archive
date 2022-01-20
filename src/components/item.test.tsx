import {
    List
} from '@chakra-ui/react'
import '@testing-library/jest-dom/extend-expect';
import { render , screen} from '@testing-library/react';
import Item from './item'

test('renders item', () => {
    render(<List><Item 
        title="Test item"
        description="Test description"
        index={0}
        pubDate="December20 2021"
        duration={676}
        tags={[]}
        unix={1593211040}
    /></List>)

    screen.getByText("Test description")
    screen.getByText("Listen")

});
