import {Fragment} from 'react'
import {
    Tag
  } from '@chakra-ui/react'

import { ITag } from '../interfaces'

export interface ComponentProps {
    tags: ITag[]
}

const TagsComponent = ({tags}:ComponentProps) => {

    const tagArray = tags.map((tag:ITag, index:number) => {
        return <Tag size="sm" variant='outline' style={{marginRight:10, marginTop:10}} key={`${index}-tag`}>{tag.label}</Tag>
    })

    return (
        <Fragment>{tagArray}</Fragment>
    );
}

export default TagsComponent;