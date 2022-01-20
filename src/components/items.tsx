import { ICast } from '../interfaces'
import Item from './item'
import {
    List
} from '@chakra-ui/react'

interface ComponentProps {
    casts: ICast[]
}

const Items = ({casts}: ComponentProps) => {

    const array = casts.map((cast:any, index:number)=> {
        return <Item 
                    unix={cast.unix}
                    description={cast.laDescription}
                    tags={cast.tags}
                    pubDate={cast.pubDate}
                    title={cast.title}
                    index={index}
                    key={`${index}-item`}
                    duration={cast.laDuration}
                />
    })

    return (
        <List spacing={3}>{array}</List>
    );
}

export default Items;