import { useState } from 'react'
import { nanoid } from 'nanoid'

import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/Theme'
import { GlobalStyles } from './styles/GlobalStyles'

import Header from './components/Header'
import Form from './components/Form'
import Notes from './components/Notes'

const DUMMY_NOTES = [
	{
		id: 'note-' + nanoid(),
		title: 'Hello World!',
		content: 'This is my first note.',
	},
	{
		id: 'note-' + nanoid(),
		title: 'Hey there!',
		content: 'This is my second note.',
	},
	{
		id: 'note-' + nanoid(),
		title: 'Hey Hi Hello!',
		content: 'This is my third note.',
	},
]

function App() {
	const [notes, setNotes] = useState(DUMMY_NOTES)

	const addNoteHandler = (title, content) => {
		const newNote = { id: 'note-' + nanoid(), title: title, content: content }
		setNotes([...notes, newNote])
	}

	const deleteNoteHandler = id => {
		const remainingNotes = notes.filter(note => id !== note.id)
		setNotes(remainingNotes)
	}

	const editNoteHandler = (id, newTitle, newContent) => {
		const editedNoteList = notes.map(note => {
			if (id === note.id) {
				return { ...note, title: newTitle, content: newContent }
			}
			return note
		})
		setNotes(editedNoteList)
	}

	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<Header />
			<Form addNote={addNoteHandler} />
			<Notes notes={notes} onEditNote={editNoteHandler} onDeleteNote={deleteNoteHandler} />
		</ThemeProvider>
	)
}

export default App
