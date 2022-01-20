import {
  Heading
} from '@chakra-ui/react'
import { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
      <Heading title="heading" as='h2' size='md'>
        Life Advice with Ryen Russillo Archive
      </Heading>
      <Heading title="heading" style={{ marginTop: 20 }} as='h4' size='xs'>
        Audio extracted from the <a target="_blank" href="https://www.theringer.com/ryen-russillo-podcast">Ryen Russillo Podcast</a> by <a target="_blank" href="https://www.theringer.com/">The Ringer</a>.
      </Heading>
    </Fragment>
  );
}

export default Header;