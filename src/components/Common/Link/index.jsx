const Link = ({ linkText, linkValue }) => {
    console.log('linkValue', linkValue)
    return (
        <div>
            <a target={"_blank"} href={linkValue} rel="noreferrer">{linkText || 'Learn More'}</a>
        </div>
    )
}

export default Link