import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Boku no Hero']);

    const onAddNewCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);
    }

    return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory
            setCategories={ setCategories }
            onNewCategory={ onAddNewCategory }
        />
        { categories.map(( item ) => 
            <GifGrid
                key={item}
                category={ item }
            />
        )}
    </>
    )
}

export default GifExpertApp
