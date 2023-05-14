import React, {useState, useEffect} from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'
import { URLS, API_KEY } from '../constants'
import axios from "./../axios";



export const Rowpost=({url,title,isSmall})=> {

    const [movies, setMovies] = useState([])
    const [videoId , setVideoId] = useState('')

    useEffect(()=>{
        callingApi()
    },[]);

    const callingApi = async ()=>{
       const response = await axios.get(url)
            console.log(response.data.results)
            setMovies(response.data.results)
    
    }

    const moiveVideoHandler = (id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            console.log(response.data)
            const data = response?.data?.results[0]
            setVideoId(data.key)
        })
        
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 0,
        }, 
    };
  return (
    <>

    <div className='row'>
        <h2>{title}</h2>
        <div className="posters">
                {movies.map((doc)=> <img onClick={()=> moiveVideoHandler(doc.id) } key={doc.id} className={`${isSmall ? 'smallPoster' : 'poster' }`} src={`${URLS.IMAGE_URL+doc.backdrop_path}`} alt="poster" />)}
        </div>
      { videoId &&  <Youtube opts={opts} videoId ={videoId}/> }
    </div>

    </>
    
  )
}



