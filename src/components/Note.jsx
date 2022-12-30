import editIcon from '../assets/edit-icon.svg'
import { StyledNote } from '../styles/Note.styled'

const Note = props => {
	return (
		<StyledNote>
			<img src={editIcon} alt='' onClick={props.deleteNote} />
			<h2>{props.title}</h2>
			<p>{props.content}</p>
			<button onClick={() => props.deleteNote(props.id)}>DEL</button>
		</StyledNote>
	)
}

export default Note
