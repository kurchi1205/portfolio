const Card = (props) => {
    const { children, sectionClassName = '' } = props
    return (
        <div className="box-shadow-full" style={{"borderRadius": "1rem"}}>
            <div className={'row '+ sectionClassName}>
                {children}
            </div>
        </div>
    )
}

export default Card