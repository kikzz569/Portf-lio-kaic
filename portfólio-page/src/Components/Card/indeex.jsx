import Biography from "../../objects/biography/indeex";
import Imagecard from "../../objects/image-card/indeex";
import "./styles.css"

const Card = () => (
    <>
        <section className="card-background">
                <article className='img-card'>
                    <Imagecard />
                </article>
                <article className="txt-card">
                    <Biography />
                </article>

        </section>        
    </>
    
)

export default Card;