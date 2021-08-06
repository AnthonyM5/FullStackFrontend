import React, { useEffect, useState } from "react";
import { welcome, randomGif, searchGif } from '../apiServices';






const Welcome = () => {
    
    const [message, setMessage] = useState("");
    const [query, setQuery] = useState([]);
    const [gifs, setGifs] = useState(null);

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchGif(query);
      
    }


    
    useEffect(() => {
        const getMessage = async () => {
            let json = await welcome();
            setMessage(json.message)
        }
        getMessage()
    }, [])

    useEffect(() => {
        const getGif = async () => {
            let json = await randomGif();
            setGifs(json.data.images.downsized_large.url);
        }
        getGif();
    }, [])


    return (
       <>
       {message}
       <div className="search-container">
           <form onSubmit={handleSubmit}>
            <input
            className="search-bar"
            name="name-input"
            placeholder="Search Gifs"
            type="text"
            value={query}
            onChange={onChange}
            />
            <input type="submit" value="Submit"/>
            </form>
      </div>
      <img src={gifs} alt="gifs" />

       </>
    )

}

export default Welcome