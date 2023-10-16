// Fetch API
const API_KEY = 'YOUR API KEY';

const httpcall = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${ API_KEY }`);

// V1
/*httpcall
.then( resp => {
    resp.json()
    .then( console.log )
    .catch( console.warn )
})
.catch( console.warn )*/

// V2 - chained promises
httpcall
.then( resp => resp.json())
.then( ({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
})
.catch( console.warn )

/*
Notes:

*/