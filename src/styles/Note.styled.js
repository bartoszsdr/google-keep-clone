import styled from 'styled-components'

export const StyledNote = styled.div`
	position: relative;
	padding: 20px;
	background-color: #fff;
	border: 1px solid #dadce0;
	border-radius: 8px;
	cursor: default;
	transition: all 0.2s ease-in-out;
	overflow-wrap: break-word;
	color: ${({ theme }) => theme.colors.white};
	&:hover {
		box-shadow: 0px 0px 3px 0px rgba(169, 169, 169, 1);
	}
	h2 {
		margin-bottom: 1rem;
	}
	img {
		position: absolute;
		right: 0;
		top: 0;
		padding: 0.5rem;
		cursor: pointer;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}
	&:hover img {
		opacity: 1;
	}
`
