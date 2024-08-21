import './styles.css'
import gmail from '../../Img/gmail-48.png'
import whatsapp from '../../Img/whatsapp-48.png'
import linkedin from '../../Img/linkedin-45.png'

const Icons = () => (
    <ul className='nav-items'>
        <li className='item'>
            <a href="#Email">
                <img src={gmail} alt="" />
            </a>
        </li>
        <li className='item'>
            <a href="#Wpp">
                <img src={whatsapp} alt="" />
            </a>
        </li>
        <li className='item'>
            <a href="#linkedin">
                <img src={linkedin} alt="" />
            </a>
        </li>
    </ul>
)

export default Icons