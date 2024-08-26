import Imgcard3 from "../../Img/foto-card3.jpg"
import "./styles.css"

const Card3 = () => (
    <>
        <article className='img-card3'>
            <img src={Imgcard3} alt="" />
        </article>
        <article className="txt-card3">
            <h1>Experiencia profissional</h1>
            <p>atuo como atleta de volleyball a 6 anos
                em equipes de base que executam um trabalho
                extremamente profissional, o que me agregou
                em varios traços da minha vida profissional,
                como: resolução rápida de problemas, foco,
                dedicação para alcançar metas, liderança e
                grande facilidade de trabalhar em equipe
            </p>
        </article>
    </>
)

export default Card3;