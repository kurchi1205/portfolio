const Link = ({ linkText, linkValue }) => {
	return (
		<div>
			<a target={'_blank'} href={linkValue} rel="noreferrer">
				{linkText || 'Learn More'}
			</a>
		</div>
	)
}

export default Link
