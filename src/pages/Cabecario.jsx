//todo: Stile
import "../styles/Cabecario.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


//todo: img
import Jabes from "../imgs/jabes.jpeg";


export default function Cabecario() {
    const string  = "</Desenvolvedor Fullstack>"
    return(
        <div className="cabecario">

            <div className="Cabecario_infor">
            <a href="https://github.com/JabesLima" target="_blank" rel="noopener noreferrer"><img src={Jabes} alt="/eu" /></a>
            <h1>Paulo Jabes Lima da Silva</h1>
            <p>{string}</p>
            </div>

            <div className="rede_sociais">
            <a href="https://www.instagram.com/jabs_silva_usa_ofc" target="_blank"><FontAwesomeIcon icon={faInstagram} className="i"/></a>
            <a href="https://www.linkedin.com/in/jabes-silva-743419255" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="i"/></a>
            <a href="https://github.com/JabesLima" target="_blank"><FontAwesomeIcon icon={faGithub} className="i"/></a>

            <a href="https://wa.me/5575992251548?text=Ol%C3%A1%2C%20tudo%20bom%3F" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="i"/></a>
            <a href="mailto:jabeslima15@gmail.com?subject=Vaga%20de%20emprego" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="i"/></a>
            </div>

            
        </div>
    )
}



