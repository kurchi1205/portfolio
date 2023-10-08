const Divider = () => {
	return <div className="progress"></div>
}

const TechInfo = ({ data }) => {
	console.log('data', data)
	return (
		<div className="col-md-6">
			{data.map(({ name, items, flatList }, index) => {
				return (
					<div key={'tech_' + index} style={{ marginBottom: '30px' }}>
						<h4 style={{ fontWeight: 'bold' }}>{name}</h4>
						{flatList ? (
							<p>{items.join(', ')}</p>
						) : (
							<ul>
								{items.map((item, idx) => {
									return <li key={'tech_item_' + idx} style={{ marginBottom: '8px' }}>{`${item.name}: ${item.items.join(', ')}`}</li>
								})}
							</ul>
						)}
						<Divider />
					</div>
				)
			})}
		</div>
	)
}

export default TechInfo
