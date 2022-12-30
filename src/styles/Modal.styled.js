import styled from 'styled-components'

export const StyledBackdrop = styled.div`
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 20;
	background-color: rgba(0, 0, 0, 0.7);
`

export const StyledModal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 85%;
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 30;
`
