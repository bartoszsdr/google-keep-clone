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
	background-color: ${props => props.theme.colors.white};
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
		color: ${props => props.theme.colors.black};
	}
	input {
		font-size: ${props => props.theme.fonts.big};
		font-weight: bold;
		margin-bottom: 1rem;
	}
	textarea {
		min-height: 100px;
		max-height: 200px;
		font-size: ${props => props.theme.fonts.medium};
	}
	input::placeholder,
	textarea::placeholder {
		color: ${props => props.theme.colors.darkGrey};
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
		font-size: 2.5rem;
		padding-bottom: 0.2rem;
		line-height: 1;
		text-align: center;
	}
	@media (min-width: 768px) {
		input {
			font-size: ${props => props.theme.fonts.large};
		}
		textarea {
			font-size: ${props => props.theme.fonts.big};
		}
		button {
			bottom: -22px;
			width: 45px;
			height: 45px;
			font-size: 3rem;
			padding-bottom: 0.3rem;
		}
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
