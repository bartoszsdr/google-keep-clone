import Header from './components/Header'
import Form from './components/Form'
import Notes from './components/Notes'

import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/Theme'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<Header />
			<Form />
			<Notes />
		</ThemeProvider>
	)
}

export default App
