import googleKeepIcon from '../assets/google-keep-icon.png'
import reactIcon from '../assets/react-icon.png'
import firebaseIcon from '../assets/firebase-icon.png'

import { StyledHeader } from '../styles/Header.styled'

const Header = () => {
	return (
		<StyledHeader>
			<img src={googleKeepIcon} alt='Google Keep' />
			<span>+</span>
			<img src={reactIcon} alt='React' />
			<span>+</span>
			<img src={firebaseIcon} alt='Firebase' />
		</StyledHeader>
	)
}

export default Header
