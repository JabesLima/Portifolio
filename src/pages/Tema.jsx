import "../styles/Tema.css";
// todo: fontes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

export default function Tema(){
    const [ligar, setLiga] = useState(false)
    const audio = new Audio('/light.mp3');

    function tema(){
        audio.play();
        setLiga(!ligar);
    }

    useEffect(() => {
        // todo: Body Principal
        document.body.style.backgroundColor = ligar ? "rgba(212, 195, 195, 0.733)" : "black";
        document.body.style.color = ligar ? "black" : "white";
        
        // todo: Trocando cor de cada div---------

        // todo>> div APP
        const ContainerAPP = document.querySelector(".container_principal");
        if(ContainerAPP){ContainerAPP.style.color = ligar ? "black" : "white"}
        
        // todo>> div Cabeçario
        const Cabecario = document.querySelector(".cabecario");
        if(Cabecario){
            const CabecarioA = document.querySelectorAll(".rede_sociais a");
            CabecarioA.forEach((link) => {
                if (link) {
                    link.style.color = ligar ? "black" : "white";
                }
            });
            Cabecario.style.color = ligar ? "black" : "white"
        }
        
        // todo>> div AboutMe
        const AboutMe = document.querySelector(".AboutMe");
        if(AboutMe){AboutMe.style.color = ligar ? "black" : "white"}

    },[ligar])

    return(
        <div className="Tema">
            <FontAwesomeIcon icon={faLightbulb} className={`icon ${ligar ? 'ligado' : 'desligado'}`} onClick={tema} />
        </div>
    )
}