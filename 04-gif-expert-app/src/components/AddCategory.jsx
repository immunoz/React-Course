import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');
    const onInputChange = ( { target }) => {
        setInputValue( target.value );
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const cleanInputValue = inputValue.trim();
        if ( cleanInputValue.length <= 1 ) return;

        onNewCategory( cleanInputValue );
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder='Search for GIFs'
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
  )
}
