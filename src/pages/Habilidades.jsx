// Import do estilo e ícones
import '../styles/Habilidade.css';

//todo: imagems
import HTML from "../imgs/Langueges/HTML5.png";
import Css from "../imgs/Langueges/CSS3.png";
import React from "../imgs/Langueges/React.png";
import Vue from "../imgs/Langueges/Vue.png";
import JavaScript from "../imgs/Langueges/JavaScript.png";
import TypeScript from "../imgs/Langueges/TypeScript.png";
import Python from "../imgs/Langueges/Python.png";
import Node from "../imgs/Langueges/Node.png";
// import Next from "../imgs/Langueges/Next.png";


export default function Habilidades(){
    return (
        <div className='Habilidades'>
            <h1>Habilidades</h1>
            <div className="icones">
            <div><h1>HTML5</h1><img src={HTML} alt="/html" /></div>
            <div><h1>CSS3</h1><img src={Css} alt="/css" /></div>
            <div><h1>React.js</h1> <img src={React} alt="/react" /></div>
            {/* <div><h1>Next.js</h1><img src={Next} alt="/nextjs" /></div> */}
            <div><h1>Vue.js</h1> <img src={Vue} alt="/vue"/></div>
            <div><h1>JavaScript</h1><img src={JavaScript} alt="/javascript" /></div>
            <div><h1>TypeScript</h1><img src={TypeScript} alt="/typeScript" /></div>
            <div><h1>Python</h1><img src={Python} alt="/python" /></div>
            <div><h1>Node.js</h1><img src={Node} alt="/node" /></div>
            
            </div>
            
        </div>
    );
};


