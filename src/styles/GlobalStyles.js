import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	html,
	body {
		height: 100%;
	}	
	html {
		font-size: 62.5%;
		scroll-behavior: smooth;
	}
	body{
		font-family: 'Inter', sans-serif;
		background-color: ${props => props.theme.colors.lightGrey};;
		padding: 3rem;
	}
	a {
		text-decoration: none;
	}
	img {
		height: auto;
	}
	input,
	button,
	textarea,
	select {
		font-family: inherit;
	}
	button {
		border: none;
		cursor: pointer;
	}
	textarea {
		resize: none;
	}
	li {
		list-style: none;
	}
	@media (min-width: 768px){
		body{
		padding: 3rem 12rem;
	}
	}
`
