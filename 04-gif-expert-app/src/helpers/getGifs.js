export const getGifs = async( category ) => {
    try {
        const url = `http://api.giphy.com/v1/gifs/search?api_key=RVsuyRFzpShmqrqJw2SFaFAxHUiICMNk&q=${ category }&limit=10`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }));
        console.log( gifs );
        return gifs;
    } catch (e) {
        console.error('Something gone wrong with the getGifs from giphy');
    }
}