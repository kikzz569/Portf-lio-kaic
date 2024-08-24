import Biography from "../../objects/biography/indeex";
import Buttonleft from "../../objects/button-left/indeex";
import Buttonright from "../../objects/button-right/indeex";
import Imagecard from "../../objects/image-card/indeex";
import "./styles.css"

const Card = () => (
    <>
        <section className="card-background">
            <Buttonleft />
                <article className='img-card'>
                    <Imagecard />
                </article>
                <article className="txt-card">
                    <Biography />
                </article>
            <Buttonright />

        </section>        
    </>
    
)

export default Card;