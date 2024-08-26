import './styles.css'
import JavaScript from '../../Img/js-icon.png'
import React from '../../Img/react-icon.png'
import Html from '../../Img/html-icon.png'
import Css from '../../Img/css-icon.png'
import Git from '../../Img/git-icon.png'

const Skills = () => (
    <>
        <h1 className='txt-card2'>Competências</h1>
                <ul className='list-card2'>
                    <li className='item-card2'>
                        <img src={JavaScript} alt="" />
                        <p>JavaScript</p>
                    </li>
                    <li className='item-card2'>
                        <img src={React} alt="" />
                        <p>React.js</p>
                    </li>
                    <li className='item-card2'>    
                        <img src={Html} alt="" />
                        <p>HTML5</p>
                    </li>
                    <li className='item-card2'>
                        <img src={Css} alt="" />
                        <p>CSS3</p>
                    </li>
                    <li className='item-card2'>
                        <img src={Git} alt="" />
                        <p>Git</p>
                    </li>
            </ul>
    </>
    
)

export default Skills;