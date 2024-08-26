import Buttonleft from "../../objects/button-left/indeex";
import Buttonright from "../../objects/button-right/indeex";
import Card from "../Card/indeex";
import Card2 from "../Card2/indeex";
import "./styles.css"

const Section = () => (
    <>
        <section className="card-background">
            <Buttonleft />
                    <ul className="list-card">
                        <li className="item-card">
                            <Card />
                        </li>
                        <li className="item-card">
                            <Card2 />
                        </li>
                    </ul>
            <Buttonright />
        </section>
    </>
    
)

export default Section;