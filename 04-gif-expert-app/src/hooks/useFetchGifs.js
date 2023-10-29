import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getData = async() => {
        const images = await getGifs(category);
        if (images) {
            setImages(images);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return {
        images,
        isLoading,
    }
}
