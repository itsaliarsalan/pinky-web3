import { Box } from '@mui/material'
import brightLogo from '../assets/images/logo_white.png'
import darkLogo from '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { Context } from '../App'
import { useContext } from 'react'

function Logo({ sx }) {
	const { isDarkMode } = useContext(Context)
	const navigate = useNavigate()
	return (
		<Box
			sx={{ ...sx }}
			onClick={() => {
				navigate('/')
			}}
		>
			<img
				src={isDarkMode ? brightLogo : darkLogo}
				className='img-fluid'
				alt=''
			/>
		</Box>
	)
}

Logo.defaultProps = {
	isDarkMode: true,
}

export default Logo
