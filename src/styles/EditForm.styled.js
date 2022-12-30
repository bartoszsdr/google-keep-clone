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
		font-size: 1.8rem;
		color: ${({ theme }) => theme.colors.black};
	}
	input {
		margin-bottom: 1rem;
		font-size: 2rem;
		font-weight: bold;
	}
	textarea {
		height: 75%;
	}
	.delete-btn {
		left: 0;
		padding: 0.8rem 2.4rem;
		img {
			height: 20px;
		}
	}
	.confirm-btn {
		right: 0;
		padding: 1.2rem 2.4rem;
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
