import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Audio from './audio'

test('renders audio', () => {
    render( <Audio 
                audioUrl="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
                pubDate="December 23 2012"
                title="Audio Title"
                unix={0}
                description="Audio description"
                duration={2343}
            />)

});
