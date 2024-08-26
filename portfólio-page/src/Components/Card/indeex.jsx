import './styles.css'
import Biography from "../../objects/biography/indeex";
import Imagecard from "../../objects/image-card/indeex";

const Card = () => (
    <>
        <article className='img-card'>
            <Imagecard />
        </article>
        <article className="txt-card">
            <Biography />
        </article>
    </>
)

export default Card;