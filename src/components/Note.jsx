import styled from 'styled-components'

const StyledNote = styled.div`
	position: relative;
	padding: 20px;
	background-color: #fff;
	border: 1px solid #dadce0;
	border-radius: 8px;
	cursor: default;
	transition: box-shadow 0.2s ease-in-out;
	overflow-wrap: break-word;
	color: ${({ theme }) => theme.colors.white};
	&:hover {
		box-shadow: 0px 0px 3px 0px rgba(169, 169, 169, 1);
	}
	svg {
		position: absolute;
		right: 0;
		top: 0;
		padding: 0.5rem;
		cursor: pointer;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}
	&:hover svg {
		opacity: 1;
	}
`

const StyledButton = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	padding: 0.5rem;
	cursor: pointer;
`

const Note = props => {
	return (
		<StyledNote>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='#7f7f7f'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
				class='feather feather-edit-2'>
				<path d='M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z' />
			</svg>
			<div>
				<h2>Hello World!</h2>
				<p>This is my first note.</p>
			</div>
		</StyledNote>
	)
}

export default Note
