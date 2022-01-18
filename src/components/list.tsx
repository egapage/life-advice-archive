import Items from './items'
import ReactPaginate from 'react-paginate';
import { api } from '../utils/api';
import { useState, useEffect } from 'react'
import {
    Box,
    Skeleton
} from '@chakra-ui/react'
import {ICast} from '../interfaces'

const List = () => {

    const [casts, setCasts] = useState<ICast[]>([])
    const [dataLoaded, setDataLoaded] = useState<boolean>(false)

    //items
    const [itemOffset, setItemOffset] = useState(0);
    const [endOffset, setEndOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentItems, setCurrentItems] = useState<ICast[]>([])
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;
        let casts_:any = casts.slice(itemOffset, endOffset)
        setCurrentItems(casts_)
        setPageCount(Math.ceil(casts.length / itemsPerPage))
        setEndOffset(endOffset)

    }, [itemOffset, casts])

    useEffect(()=> {
        getData()
    }, [])

    async function getData() {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            const res = await api.get('/api')
            const { data } = res
            data.sort((a:any,b:any) => {
                return new Date(b.unix).valueOf() - new Date(a.unix).valueOf()
            })
            setCasts(data)
            setDataLoaded(true)
        }
        catch (err) {
            console.log('Error loading data.')
            setDataLoaded(false)
        }
    }

    const handlePageClick = (event:any) => {
        const newOffset = (event.selected * itemsPerPage) % casts.length
        setItemOffset(newOffset)
    };

    return (
        <div>
            <Skeleton style={{minHeight: '60px'}} isLoaded={dataLoaded}>
                <Box style={{marginTop:20, marginBottom:20}}>
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
                    casts={currentItems}
                />
                
            </Skeleton>
            <Skeleton style={{minHeight: '60px', marginTop: 20}} isLoaded={dataLoaded}></Skeleton>
            <Skeleton style={{minHeight: '60px', marginTop: 20}} isLoaded={dataLoaded}></Skeleton>
            <Skeleton style={{minHeight: '60px', marginTop: 20}} isLoaded={dataLoaded}></Skeleton>
        </div>
    );
}

export default List;