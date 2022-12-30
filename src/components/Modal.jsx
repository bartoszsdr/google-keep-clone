import ReactDOM from 'react-dom'

import { StyledBackdrop, StyledModal } from '../styles/Modal.styled'

const Backdrop = props => {
	return <StyledBackdrop onClick={props.onClose} />
}

const ModalOverlay = props => {
	return (
		<StyledModal>
			<div>{props.children}</div>
		</StyledModal>
	)
}

const portalElement = document.getElementById('overlays')

const Modal = props => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</>
	)
}

export default Modal
