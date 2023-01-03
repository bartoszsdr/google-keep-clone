import styled from 'styled-components'

export const StyledEditForm = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	height: 35rem;
	background: #fff;
	padding: 2rem 1.5rem 2rem;
	border-radius: 8px;
	input,
	textarea {
		display: block;
		margin: 0;
		padding: 0;
		width: 100%;
		outline: 0;
		border: none;

		color: ${props => props.theme.colors.black};
	}
	input {
		margin-bottom: 1rem;
		font-size: ${props => props.theme.fonts.big};
		font-weight: bold;
	}
	textarea {
		height: 75%;
		font-size: ${props => props.theme.fonts.medium};
	}
	.delete-btn {
		left: 0;
		padding: 0.8rem 2.4rem;
		img {
			height: 18px;
		}
	}
	.confirm-btn {
		right: 0;
		padding: 1.2rem 2.4rem;
		font-size: ${props => props.theme.fonts.small};
		font-weight: bold;
	}
	.delete-btn,
	.confirm-btn {
		position: absolute;
		bottom: 0;
		margin: 1rem;
		border-radius: 3px;
	}
`
