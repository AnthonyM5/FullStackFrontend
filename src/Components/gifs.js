import React from "react";
import '../images.css';


const gifs = (props) => {
    console.log(props.data.images.downsized_large)
    return (
        <>
            <img className="gif" id={props.data.id} src={props.data.images.downsized_large.url} alt="slug"/>
        </>
    )
}

export default gifs