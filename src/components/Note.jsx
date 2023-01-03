import { useState } from 'react'
import Modal from './Modal'

import { StyledNote } from '../styles/Note.styled'
import { StyledEditForm } from '../styles/EditForm.styled'

import editIcon from '../assets/edit-icon.svg'
import deleteIcon from '../assets/delete-icon.svg'

const Note = props => {
	const [isEditing, setIsEditing] = useState(false)
	const [newTitle, setNewTitle] = useState(props.title)
	const [newContent, setNewContent] = useState(props.content)

	const handleTitleChange = e => {
		setNewTitle(e.target.value)
	}
	const handleContentChange = e => {
		setNewContent(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (!newTitle.trim() && !newContent.trim()) {
			setIsEditing(false)
			return props.deleteNote(props.id)
		}
		props.editNote(props.id, newTitle, newContent)
		setIsEditing(false)
	}

	const viewTemplate = (
		<StyledNote onClick={() => setIsEditing(true)}>
			<button onClick={() => setIsEditing(true)}>
				<img src={editIcon} alt='Edit' />
			</button>
			<h2>{props.title}</h2>
			<p>{props.content}</p>
		</StyledNote>
	)

	const editingTemplate = (
		<Modal onClose={handleSubmit}>
			<StyledEditForm onSubmit={handleSubmit}>
				<input id={props.id} placeholder='Title' value={newTitle} onChange={handleTitleChange} />
				<textarea
					id={props.id}
					placeholder='Take a note...'
					value={newContent}
					onChange={handleContentChange}></textarea>

				<button className='delete-btn' type='button' onClick={() => props.deleteNote(props.id)}>
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
