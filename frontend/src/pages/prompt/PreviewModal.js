import { Box, Modal, Skeleton } from '@mui/material'
import { Link } from 'react-router-dom'

export default function PreviewModal({
	previewOpen,
	setImageLoaded,
	activeImage,
	handlePreviewClose,
	imageLoaded,
}) {
	return (
		<Modal
			open={previewOpen}
			onClose={handlePreviewClose}
			disableScrollLock
			sx={{ height: '100%' }}
			className='nft-modal'
		>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					outline: 'none',
				}}
			>
				<Box
					sx={{
						minHeight: { md: 350 },
						width: { xs: 300, sm: 350 },
						margin: 'auto',
						backgroundColor: '#fff',
						borderRadius: 5,
						outline: 'none',
						padding: 2,
					}}
				>
					{!imageLoaded && (
						<Skeleton variant='rectangular' width='100%' height={350} />
					)}
					<img
						src={`${activeImage.src}`}
						onLoad={() => setImageLoaded(true)}
						style={{
							display: imageLoaded ? 'block' : 'none',
							height: '350px',
							width: '100%',
							objectFit: 'cover',
							borderRadius: '10px',
							overflow: 'hidden',
						}}
						alt='preview'
					/>
					<Box
						component='div'
						sx={{
							'& a': {
								color: 'rgba(0,0,0,0.6)',
								transition: 200,
								'&:hover': { color: 'rgba(0,0,0,0.8)' },
							},
						}}
					>
						<h4
							style={{
								margin: 0,
								marginTop: 15,
								marginBottom: 5,
								lineHeight: '1.4rem',
								fontWeight: 500,
							}}
						>
							{activeImage.prompt === undefined ? (
								<Skeleton width={200} />
							) : (
								activeImage.prompt
							)}
						</h4>
						<h5
							style={{
								margin: 0,
								textAlign: 'end',
								fontWeight: 500,
								color: 'rgba(0,0,0,0.6)',
							}}
						>
							Generated by:{' '}
							<Link to={'/user/' + activeImage.user}>{activeImage.user}</Link>
						</h5>
					</Box>
				</Box>
			</Box>
		</Modal>
	)
}
