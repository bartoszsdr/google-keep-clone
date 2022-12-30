import Note from './Note'
import { StyledNotes } from '../styles/Notes.styled.js'

const Notes = props => {
	const notesList = props.notes.map(note => (
		<Note key={note.id} id={note.id} title={note.title} content={note.content} deleteNote={props.onDeleteNote} />
	))

	return <StyledNotes>{notesList}</StyledNotes>
}

export default Notes
