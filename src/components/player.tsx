import { useContext, useState, Fragment} from 'react'
import { EpisodeContext } from '../context/episode'
import {api} from '../utils/api'
import Audio from './audio'

const Player = () => {

    const [audioUrl, setAudioUrl] = useState("")
    const episode_context = useContext(EpisodeContext)

    if (!episode_context) {
        return null
    }

    const {episode} = episode_context
    const {unix, pubDate, title, description, duration} = episode
    
    if (unix > 0) {
        handleListen(unix)
    }
    
    async function handleListen(unix:any) {
        try {
            const res = await api.get('/api/url/'+unix)
            const { data } = res
            setAudioUrl(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <Fragment>
            <Audio 
                description={description} 
                audioUrl={audioUrl} 
                pubDate={pubDate} 
                title={title} 
                unix={unix}
                duration={duration}
            />
        </Fragment>
    );
}

export default Player;