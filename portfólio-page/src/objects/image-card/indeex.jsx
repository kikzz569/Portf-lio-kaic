import Picture from '../../Img/foto.kaic.png'
import "./styles.css"

const Imagecard = () => (
    <picture className='img-kaic'>
        <img src={Picture} alt="" />
    </picture>
)

export default Imagecard;