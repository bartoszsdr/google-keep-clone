import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	@font-face {
  		font-family: 'ProductSans';
  		font-style: normal;
  		src: local('ProductSans'), url(../fonts/ProductSans-Regular.woff) format('woff');
	}
	
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
		font-family: 'ProductSans', sans-serif;
		background-color: ${({ theme }) => theme.colors.lightGrey};
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
`
