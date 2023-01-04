import { useState } from 'react'
import Modal from './Modal'

import { StyledNote } from '../styles/Note.styled'
import { StyledEditForm } from '../styles/EditForm.styled'

import editIcon from '../assets/icons/edit.svg'
import deleteIcon from '../assets/icons/delete.svg'

const Note = props => {
	const [isEditing, setIsEditing] = useState(false)
	const [newTitle, setNewTitle] = useState(props.title)
	const [newContent, setNewContent] = useState(props.content)

	// Listen to keyup events and set the state value
	const handleTitleChange = e => {
		setNewTitle(e.target.value)
	}
	const handleContentChange = e => {
		setNewContent(e.target.value)
	}

	// Set the new title and content in editing note. Delete it if empty.
	const handleSubmit = e => {
		e.preventDefault()
		if (!newTitle.trim() && !newContent.trim()) {
			setIsEditing(false)
			// return props.deleteNote(props.id)
			return deleteNote(props.id)
		}
		editNote(props.id, newTitle, newContent)
		setIsEditing(false)
	}

	// Fetch the note by id and update its content
	const editNote = (id, title, content) => {
		fetch(`https://keep-react-512ea-default-rtdb.firebaseio.com/notes/${id}.json`, {
			method: 'PUT',
			body: JSON.stringify({
				title: title,
				content: content,
			}),
		})
	}

	// Fetch the note by id and delete it
	const deleteNote = id => {
		fetch(`https://keep-react-512ea-default-rtdb.firebaseio.com/notes/${id}.json`, {
			method: 'DELETE',
		})
	}

	// Display when not editing
	const viewTemplate = (
		<StyledNote onClick={() => setIsEditing(true)}>
			<button onClick={() => setIsEditing(true)}>
				<img src={editIcon} alt='Edit' />
			</button>
			<h2>{props.title}</h2>
			<p>{props.content}</p>
		</StyledNote>
	)

	// Display when editing
	const editingTemplate = (
		<Modal onClose={handleSubmit}>
			<StyledEditForm onSubmit={handleSubmit}>
				<input id={props.id} placeholder='Title' maxLength='20' value={newTitle} onChange={handleTitleChange} />
				<textarea
					id={props.id}
					placeholder='Take a note...'
					maxLength='100'
					value={newContent}
					onChange={handleContentChange}></textarea>

				<button className='delete-btn' type='button' onClick={() => deleteNote(props.id)}>
					<img src={deleteIcon} alt='Delete' />
				</button>
				<button className='confirm-btn' type='submit'>
					Done
				</button>
			</StyledEditForm>
		</Modal>
	)

	return <li>{isEditing ? editingTemplate : viewTemplate}</li>
}

export default Note
