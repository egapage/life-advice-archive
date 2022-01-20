import {
    Box,
    Container,
    Text
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

    const [playerClass, setPlayerClass] = useState("")
    const [audioUnix, setAudioUnix] = useState(0)
    const [audioTitle, setAudioTitle] = useState("")
    const [audioDescription, setAudioDescription] = useState("")
    const [audioDuration, setAudioDuration] = useState(0)
    const [audioDate, setAudioDate] = useState("")

    useEffect(() => {
        if (unix !== audioUnix) {
            reset()
        }
    }, [unix])

    async function reset() {
        setPlayerClass("")
        await new Promise(resolve => setTimeout(resolve, 200))
        setAudioUnix(unix)
        setAudioTitle(title)
        setAudioDescription(description)
        setAudioDuration(duration)
        setAudioDate(pubDate)
        await new Promise(resolve => setTimeout(resolve, 200))
        setPlayerClass("show")
    }

    return (
        <div className={`player ${playerClass}`}>
            <Container maxW='xl'>
                <Box my={5}>
                    {audioDescription ? 
                        <Text className="player__Text" style={{ color: '#1c1e25' }} fontSize='sm'>{audioDescription}</Text>
                    : 
                        <Text className="player__Text" style={{ color: '#1c1e25' }} fontSize='sm'>
                            {audioTitle}
                        </Text>
                    }
                    <Text mt={2} style={{ color: '#1c1e25' }} fontSize='xs'>
                        {dayjs(pubDate).format('MMMM D, YYYY')} | [{(audioDuration / 60).toFixed(0)} mins]
                    </Text>
                </Box>
                <Box>
                    <audio src={`${audioUrl}`} controls>
                        Your browser does not support the audio element.
                    </audio>
                </Box>
            </Container>
        </div>

    );
}

export default Audio;