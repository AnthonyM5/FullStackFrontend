import React from "react";


const gifs = (props) => {
    console.log(props.data.images.downsized_large)
    return (
        <>
            <img id={props.data.id} src={props.data.images.downsized_large.url} alt="slug"/>
        </>
    )
}

export default gifs