import { useState } from "react"

export const AddCategory = ( {setCategories} ) => {
	const [inputValue, setinputValue] = useState('')

	const onInputChange = ({target}) => {
		setinputValue(target.value);
	}

	const onFormSubmit = (event) => {
		event.preventDefault();
		if ( inputValue.trim().length <= 1 ) return;
		setCategories(categories => [...categories, inputValue])
	}

  return (
		<form onSubmit={ onFormSubmit }>
			<input
				type="text"
				placeholder="buscar un gif"
				value={inputValue}
				onChange={ onInputChange }
			/>
			
		</form>
  )
}
