import { IEpisode } from '../interfaces'
import Item from './item'
import {
    List
} from '@chakra-ui/react'

interface ComponentProps {
    episodes: IEpisode[]
}

const Items = ({episodes}: ComponentProps) => {

    const array = episodes.map((episode:IEpisode, index:number)=> {
        return <Item 
                    unix={episode.unix}
                    description={episode.laDescription}
                    tags={episode.tags}
                    pubDate={episode.pubDate}
                    title={episode.title}
                    index={index}
                    key={`${index}-item`}
                    duration={episode.laDuration}
                />
    })

    return (
        <List spacing={3}>{array}</List>
    );
}

export default Items;