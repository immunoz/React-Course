// Async/Await
const getImage = async() => {
    try {
        const API_KEY = 'Your API KEY';
        const httpcall = await fetch(`https://api.giphy.com/v1/stickers/random?api_key=${ API_KEY }`);
        const { data } = await httpcall.json()
        const { url } = data.images.original
        console.log(data)

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch ( error ) {
        console.error( error )
    }
}

getImage()


/*
Notes:
- Async/Await is an alternative to promises.
*/