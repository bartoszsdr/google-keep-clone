import { useState, useRef, useEffect } from 'react'
import Modal from './Modal'
import editIcon from '../assets/edit-icon.svg'
import { StyledNote } from '../styles/Note.styled'
import { StyledEditForm } from '../styles/EditForm.styled'

import trashIcon from '../assets/trash-icon.svg'

const usePrevious = value => {
	const ref = useRef()
	useEffect(() => {
		ref.current = value
	})
	return ref.current
}

const Note = props => {
	const [isEditing, setIsEditing] = useState(false)
	const [newTitle, setNewTitle] = useState(props.title)
	const [newContent, setNewContent] = useState(props.content)

	const editTitleRef = useRef(null)
	const editContentRef = useRef(null)
	const editButtonRef = useRef(null)

	const wasEditing = usePrevious(isEditing)

	const handleTitleChange = e => {
		setNewTitle(e.target.value)
	}
	const handleContentChange = e => {
		setNewContent(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		// if (!newTitle.trim() && !newContent.trim()) {
		// 	return
		// }
		props.editNote(props.id, newTitle, newContent)
		setIsEditing(false)
	}

	// useEffect(() => {
	// 	if (!wasEditing && isEditing) {
	// 		editTitleRef.current.focus()
	// 		editContentRef.current.focus()
	// 	}
	// 	if (wasEditing && !isEditing) {
	// 		editButtonRef.current.focus()
	// 	}
	// }, [wasEditing, isEditing])

	const viewTemplate = (
		<StyledNote onClick={() => setIsEditing(true)}>
			<button onClick={() => setIsEditing(true)} ref={editButtonRef}>
				<img src={editIcon} alt='' />
			</button>
			<h2>{props.title}</h2>
			<p>{props.content}</p>
			{/* <button onClick={() => setIsEditing(true)} ref={editButtonRef}>
				EDIT
			</button> */}
		</StyledNote>
	)

	const editingTemplate = (
		<Modal onClose={() => setIsEditing(false)}>
			<StyledEditForm onSubmit={handleSubmit}>
				<input
					id={props.id}
					placeholder='Title'
					value={newTitle || props.title}
					onChange={handleTitleChange}
					ref={editTitleRef}
				/>
				<textarea
					id={props.id}
					placeholder='Take a note...'
					value={newContent || props.content}
					onChange={handleContentChange}
					ref={editContentRef}></textarea>

				<button className='delete-btn' type='button' onClick={() => props.deleteNote(props.id)}>
					<img src={trashIcon} alt='' />
				</button>
				<button className='confirm-btn' type='submit'>
					Done
				</button>
			</StyledEditForm>
		</Modal>
	)

	// return (
	// 	<StyledNote>
	// 		<img src={editIcon} alt='' onClick={props.deleteNote} />
	// 		<h2>{props.title}</h2>
	// 		<p>{props.content}</p>
	// 		<button onClick={() => props.deleteNote(props.id)}>DEL</button>
	// 		<button onClick={() => setIsEditing(true)} ref={editButtonRef}>
	// 			EDIT
	// 		</button>
	// 	</StyledNote>
	// )

	return <>{isEditing ? editingTemplate : viewTemplate}</>
}

export default Note
