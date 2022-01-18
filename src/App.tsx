import List from './components/list'
import { Box, Container } from '@chakra-ui/react'
import './App.css';
import { EpisodeProvider } from './context/episode';
import Player from './components/player'
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <EpisodeProvider>
        <Box>
          <Container maxW='xl' >
            <Box align="left" my={12}>
              <Header />
            </Box>
            <Box align="left" my={12}>
              <List />
            </Box>
          </Container>
        </Box>
        <Player />
      </EpisodeProvider>
    </div>
  );
}

export default App;
