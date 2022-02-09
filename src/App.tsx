import { EpisodeProvider } from './context/episode'
import { Box, Container } from '@chakra-ui/react'
import Player from './components/player'
import Header from './components/header'
import List from './components/list'
import './App.css'

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
