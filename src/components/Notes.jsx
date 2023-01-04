import { useState, useEffect } from 'react'

import Note from './Note'
import { StyledNotes } from '../styles/Notes.styled.js'

const Notes = props => {
	const [notes, setNotes] = useState([])

	// Fetch the list of notes
	useEffect(() => {
		const fetchNotes = async () => {
			const response = await fetch('https://keep-react-512ea-default-rtdb.firebaseio.com/notes.json')
			const responseData = await response.json()
			const loadedNotes = []
			for (const key in responseData) {
				loadedNotes.push({
					id: key,
					title: responseData[key].title,
					content: responseData[key].content,
				})
			}
			const loadedNotesReversed = loadedNotes.reverse()
			setNotes(loadedNotesReversed)
		}
		fetchNotes()
	}, [notes])

	// Map notes to the Note component
	const notesList = notes.map(note => (
		<Note
			key={note.id}
			id={note.id}
			title={note.title}
			content={note.content}
			editNote={props.onEditNote}
			deleteNote={props.onDeleteNote}
		/>
	))

	return <StyledNotes>{notesList}</StyledNotes>
}

export default Notes
