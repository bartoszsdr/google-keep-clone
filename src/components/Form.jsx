import { useState } from 'react'
import { StyledForm, StyledFormBackdrop } from '../styles/Form.styled'

const Form = props => {
	// Handle showing input field depending on a click on the textarea
	const [showInput, setShowInput] = useState(false)
	const showInputHandler = () => {
		setShowInput(true)
	}
	const hideInputHandler = () => {
		setShowInput(false)
	}
	//

	// Handle form submition depending on a click on the button
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const addNoteHandler = e => {
		e.preventDefault()
		if (!title.trim() && !content.trim()) {
			return
		}
		props.addNote(title, content)
		setTitle('')
		setContent('')
		setShowInput(false)
	}
	//

	// Handle the actual input fields
	const changeTitleHandler = e => {
		setTitle(e.target.value)
	}
	const changeContentHandler = e => {
		setContent(e.target.value)
	}
	//

	return (
		<>
			{showInput && <StyledFormBackdrop onClick={hideInputHandler}></StyledFormBackdrop>}
			<StyledForm onSubmit={addNoteHandler}>
				{showInput && <input name='title' placeholder='Title' onChange={changeTitleHandler} value={title} />}
				<textarea
					name='content'
					placeholder='Take a note...'
					onChange={changeContentHandler}
					onClick={showInputHandler}
					value={content}></textarea>
				<button type='submit'>+</button>
			</StyledForm>
		</>
	)
}

export default Form
