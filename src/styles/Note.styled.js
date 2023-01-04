import styled from 'styled-components'

export const StyledNote = styled.div`
	position: relative;
	height: 100%;
	padding: 2rem;
	background-color: #fff;
	border: 1px solid #dadce0;
	border-radius: 8px;
	cursor: default;
	transition: all 0.2s ease-in-out;
	overflow-wrap: break-word;
	color: ${props => props.theme.colors.black};
	&:hover {
		box-shadow: 0px 0px 3px 0px rgba(169, 169, 169, 1);
	}
	h2 {
		margin-bottom: 1rem;
		font-size: ${props => props.theme.fonts.big};
	}
	p {
		font-size: ${props => props.theme.fonts.medium};
	}
	button {
		position: absolute;
		right: 0;
		top: 0;
		padding: 1rem;
		cursor: pointer;
		background-color: transparent;
		transition: opacity 0.2s ease-in-out;
		opacity: 0;
	}
	&:hover button {
		opacity: 1;
	}
	@media (min-width: 768px) {
		padding: 3rem;
		h2 {
			margin-bottom: 2rem;
			font-size: ${props => props.theme.fonts.large};
		}
		p {
			font-size: ${props => props.theme.fonts.big};
		}
	}
`
