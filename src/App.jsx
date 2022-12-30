import { Card } from './styles/Card.styled'

import { ThemeProvider } from 'styled-components'

import googleKeepLogo from './assets/google-keep-icon.png'
import reactLogo from './assets/react-icon.png'
import firebaseLogo from './assets/firebase-icon.png'
import Note from './components/Note'

const theme = {
	colors: {
		white: '#fffff',
		grey: '#e3e3e3',
		black: '#000000',
	},
}

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Card>
				<img src={googleKeepLogo} alt='' />
				<span>+</span>
				<img src={reactLogo} alt='' />
				<span>+</span>
				<img src={firebaseLogo} alt='' />
			</Card>
			<Note />
		</ThemeProvider>
	)
}

export default App
