import styled from 'styled-components'

export const StyledForm = styled.form`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-width: 600px;
	padding: 1.5rem;
	border-radius: 8px;
	margin: 0 auto 5rem;
	background-color: ${({ theme }) => theme.colors.white};
	background-color: white;
	z-index: 10;
	box-shadow: 0px 0px 3px 0px rgba(169, 169, 169, 1);
	input,
	textarea {
		display: block;
		width: 100%;
		margin: 0;
		padding: 0;
		outline: 0;
		border: none;
		font-size: 1.6rem;
		color: ${({ theme }) => theme.colors.black};
	}
	input {
		font-weight: bold;
		margin-bottom: 1rem;
	}
	textarea {
		min-height: 100px;
		max-height: 200px;
	}
	input::placeholder,
	textarea::placeholder {
		color: ${({ theme }) => theme.colors.darkGrey};
		font-weight: bold;
	}
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 18px;
		bottom: -18px;
		background: #42b883;
		color: #fff;
		border: none;
		border-radius: 50%;
		width: 36px;
		height: 36px;
		font-size: 2.4rem;
		line-height: 1;
		text-align: center;
	}
`

export const StyledFormBackdrop = styled.div`
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 9;
`
