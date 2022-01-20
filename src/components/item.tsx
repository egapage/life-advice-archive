import {
    ListItem,
    Flex,
    Box,
    Button,
    Text,
    Center
} from '@chakra-ui/react'

import { EpisodeContext } from '../context/episode'
import {useContext} from 'react'
import dayjs from 'dayjs'
import TagsComponent from './tags'

interface ComponentProps {
    title: string,
    description: string,
    tags: [],
    unix: number,
    pubDate: any,
    index: number,
    duration: number
}

const Item = ({ title, description, duration, tags, unix, pubDate, index }: ComponentProps) => {

    const episodeState = useContext(EpisodeContext)

    const handleClick = () => {
        episodeState?.setEpisode({unix: Number(unix), pubDate: pubDate, title: title, description: description, duration: duration})
    }

    return (
        <ListItem style={{ backgroundColor: "#23252f", padding: 20 }} key={`${index}-item`}>
            <Flex>
                <Box w='70%'>
                    {description ? 
                        <Text>{description}</Text>
                    :
                        <Text>{title}</Text>
                    }
                </Box>
                <Box w='30%' style={{ textAlign: 'right' }}>{dayjs(pubDate).format('MMMM D, YYYY')}</Box>
            </Flex>
            <Flex>
                <Box mt={4}>
                    <Flex>
                        <Center>
                            <Button colorScheme='teal' size='xs' onClick={handleClick}>
                                Listen
                            </Button>
                            <Text ml={3}>[{(duration / 60).toFixed(0)} mins]</Text>
                        </Center>
                    </Flex>
                </Box>
            </Flex>
            <Flex>
                <Box my={2}>
                    {tags ?
                        <TagsComponent
                            tags={tags}
                        />
                    : ""}
                </Box>
            </Flex>
        </ListItem>
    );
}

export default Item;