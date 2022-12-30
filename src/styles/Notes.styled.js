import styled from 'styled-components'

export const StyledNotes = styled.div`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr));
	position: relative;
	margin: 5rem auto;
	div:last-child {
		margin-bottom: 2rem;
	}
`
