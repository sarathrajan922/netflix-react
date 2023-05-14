import React, {useEffect, useState} from "react";
import { URLS} from './../constants';
import axios from "./../axios";
import './Banner.css';

const Banner = ()=>{

    const [movie, setMovie] = useState('')
    

    useEffect(() => {
      axios.get(URLS.Trending).then((response)=>{
       
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        setMovie(response.data.results[randomIndex])
        
      })
    }, []);
    return (
        <>
        <div
        style={{backgroundImage:`url(${URLS.IMAGE_URL+movie.backdrop_path})`}}
        className="banner">
            <div className="content">
                <h1 className="title">{movie.title}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">
                    {movie.overview}
                </h1>
            </div>
            <div className="fade_botton"></div>
        </div>
        </>
    )
}

export default Banner