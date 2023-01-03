import keepLogo from '../assets/images/keep-logo.png'
import reactLogo from '../assets/images/react-logo.png'
import firebaseLogo from '../assets/images/firebase-logo.png'

import { StyledHeader } from '../styles/Header.styled'

const Header = () => {
	return (
		<StyledHeader>
			<img src={keepLogo} alt='Google Keep' />
			<span>+</span>
			<img src={reactLogo} alt='React' />
			<span>+</span>
			<img src={firebaseLogo} alt='Firebase' />
		</StyledHeader>
	)
}

export default Header
