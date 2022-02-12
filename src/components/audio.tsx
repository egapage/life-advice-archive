import {
    Box,
    Container,
    Text,
    Slide
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

interface ComponentProps {
    audioUrl: string;
    pubDate: string;
    title: string;
    unix: number;
    description: string;
    duration: number;
}

const Audio = ({ audioUrl, pubDate, title, unix, description, duration }: ComponentProps) => {

    const [audioUnix, setAudioUnix] = useState<number>(0)
    const [audioTitle, setAudioTitle] = useState<string>("")
    const [audioDescription, setAudioDescription] = useState<string>("")
    const [audioDuration, setAudioDuration] = useState<number>(0)
    const [slideIn, setSlideIn] = useState<boolean>(false)
    const [audioDate, setAudioDate] = useState<string>("")

    useEffect(() => {
        if (unix !== audioUnix) {
            reset()
        }
    }, [unix])

    async function reset() {
        setSlideIn(false)
        await new Promise(resolve => setTimeout(resolve, 500))
        setAudioUnix(unix)
        setAudioTitle(title)
        setAudioDescription(description)
        setAudioDuration(duration)
        setAudioDate(pubDate)
        await new Promise(resolve => setTimeout(resolve, 200))
        setSlideIn(true)
    }

    return (
        <Slide direction="bottom" in={slideIn}>
            <Box bg='gray.300' py={6} shadow="dark-lg">
                <Container maxW='xl'>
                    <Box my={0}>
                        {audioDescription ? 
                            <Text className="player__Text" style={{ color: '#1c1e25' }} fontSize='sm'>{audioDescription}</Text>
                        : 
                            <Text className="player__Text" style={{ color: '#1c1e25' }} fontSize='sm'>
                                {audioTitle}
                            </Text>
                        }
                        <Text mt={2} style={{ color: '#1c1e25' }} fontSize='xs'>
                            {dayjs(audioDate).format('MMMM D, YYYY')} | [{(audioDuration / 60).toFixed(0)} mins]
                        </Text>
                    </Box>
                    <Box mt={6}>
                        <audio style={{width: '100%'}} src={`${audioUrl}`} controls>
                            Your browser does not support the audio element.
                        </audio>
                    </Box>
                </Container>
            </Box>
        </Slide>

    );
}

export default Audio;