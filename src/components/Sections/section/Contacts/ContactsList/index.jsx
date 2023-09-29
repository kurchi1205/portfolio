import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactsList = ({ contacts }) => {
    const { socials } = contacts
    return (
        <div className="socials">
            <ul>
                {
                    socials.map((social, index) => {
                        const { link, icon } = social
                        return (
                            <li>
                                <a href={link} target='blank'>
                                    <span class="ico-circle">
                                        <FontAwesomeIcon icon={icon} className='icons'/>
                                    </span>
                                </a>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default ContactsList