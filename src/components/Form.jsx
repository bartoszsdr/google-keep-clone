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

	// Handle form submition depending on a click on the button
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const addNoteHandler = e => {
		e.preventDefault()
		if (!title.trim() && !content.trim()) {
			return
		}
		// props.addNote(title, content)
		createNote(title, content)
		setTitle('')
		setContent('')
		setShowInput(false)
	}

	// Fetch the list of notes and add entry
	const createNote = (title, content) => {
		fetch('https://keep-react-512ea-default-rtdb.firebaseio.com/notes.json', {
			method: 'POST',
			body: JSON.stringify({
				title: title,
				content: content,
			}),
		})
	}

	// Listen to keyup events and set the state value
	const changeTitleHandler = e => {
		setTitle(e.target.value)
	}
	const changeContentHandler = e => {
		setContent(e.target.value)
	}

	return (
		<>
			{showInput && <StyledFormBackdrop onClick={hideInputHandler}></StyledFormBackdrop>}
			<StyledForm onSubmit={addNoteHandler}>
				{showInput && (
					<input name='title' placeholder='Title' maxLength='20' onChange={changeTitleHandler} value={title} />
				)}
				<textarea
					name='content'
					placeholder='Take a note...'
					maxLength='300'
					onChange={changeContentHandler}
					onClick={showInputHandler}
					value={content}></textarea>
				<button type='submit'>+</button>
			</StyledForm>
		</>
	)
}

export default Form
