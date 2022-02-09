import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Player from '../player'

test('renders player', () => {
    render( <Player />)
});
