import Items from './items'
import ReactPaginate from 'react-paginate'
import { api } from '../utils/api'
import { useState, useEffect, Fragment } from 'react'
import {
    Box,
    Skeleton,
    Text
} from '@chakra-ui/react'
import { IEpisode } from '../interfaces'

const List = () => {

    const [episodes, setEpisodes] = useState<IEpisode[]>([])
    const [dataLoaded, setDataLoaded] = useState<boolean>(false)
    const [dataFailed, setDataFailed] = useState<boolean>(false)

    //items
    const [pageCount, setPageCount] = useState<number>(0);

    useEffect(() => {
        getData(1)
    }, [])

    async function getData(page: number) {
        try {
            const res = await api.get('/api/episodes/'+page)
            const { data: {episodesData: {
                episodes,
                pageCount
            }}} = res

            setEpisodes(episodes)
            setPageCount(pageCount)
            setDataLoaded(true)
        }
        catch (err) {
            console.log('Error loading data.')
            setDataFailed(true)
        }
    }

    const handlePageClick = (event: any) => {
        getData(event.selected+1)
    };

    return (
        <div>
            {!dataFailed ?
                <Fragment>
                    <Skeleton style={{ minHeight: '60px' }} isLoaded={dataLoaded}>
                        <Box id="paginate" style={{ marginTop: 20, marginBottom: 20 }}>
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={1}
                                pageCount={pageCount}
                                previousLabel="<"
                                className="paginate"
                            />
                        </Box>
                        <Items
                            episodes={episodes}
                        />
                    </Skeleton>
                    <Skeleton style={{ minHeight: '60px', marginTop: 20 }} isLoaded={dataLoaded}></Skeleton>
                    <Skeleton style={{ minHeight: '60px', marginTop: 20 }} isLoaded={dataLoaded}></Skeleton>
                    <Skeleton style={{ minHeight: '60px', marginTop: 20 }} isLoaded={dataLoaded}></Skeleton>
                </Fragment>
            : 
                <Fragment>
                    <Text>Error reaching API</Text>
                </Fragment>
            }
        </div>
    );
}

export default List;