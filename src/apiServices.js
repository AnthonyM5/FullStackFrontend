const DEV_URL = 'http://localhost:3001'



export const welcome = async () => {
    let message = await fetch(DEV_URL + '/welcome');
    let messageJSON = await message.json();
    return messageJSON;

}

export const randomGif = async () => {
    let gif = await fetch(DEV_URL + '/random');
    let gifJSON = await gif.json();
    return gifJSON

}

export const searchGif = async (data) => {
    let query = await fetch(DEV_URL + '/gifs', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log(query)

}