import {Fragment} from 'react'
import {
    Tag
  } from '@chakra-ui/react'

interface ComponentProps {
    tags: ITag[]
}

interface ITag {
    label: string,
    value: string
}

const TagsComponent = ({tags}:ComponentProps) => {

    const tagArray = tags.map((tag:any, index:number) => {
        return <Tag size="sm" variant='outline' style={{marginRight:10, marginTop:10}} key={`${index}-tag`}>{tag.label}</Tag>
    })

    return (
        <Fragment>{tagArray}</Fragment>
    );
}

export default TagsComponent;