import "../styles/Projetos.css";
import Weather from "../imgs/projetos/weather.jpeg";
import Anime from "../imgs/projetos/anime.jpeg";
import G_S from "../imgs/projetos/gerado_senha.jpeg";
import Tela_L from "../imgs/projetos/Tela_Login.jpeg";
// import Clash from "../imgs/projetos/Clash.png";

export default function Projetos() {
    return (
        <div className="Projetos">
            <h1>Projetos</h1>

            <div className="Projetos_D_T">
                <h1>Destaques</h1>
                <div className="destaques">

                {/* <div className="clash projeto-item">
                        <img src={Clash} alt="Clash" />
                        <a href="#" target="_blank" className="projeto-link">Ver Projeto</a>
                </div> */}
                
                <div className="weather projeto-item">
                        <img src={Weather} alt="clima" />
                        <a href="https://jabeslima.github.io/GlobalClime/" target="_blank" className="projeto-link">Ver Projeto</a>
                </div>
                </div>
                
                <h1>Todos os projetos</h1>
                <div className="todos">
                    <div className="Gerador_senha projeto-item">
                        <img src={G_S} alt="Gerador-de-senha" />
                        <a href="//jabeslima.github.io/Projeto_senha/Gerenciador_de_Senhas/index.html" target="_blank" className="projeto-link">Ver Projeto</a>
                    </div>
                    <div className="Tela_login projeto-item">
                        <img src={Tela_L} alt="Tela-Login" />
                        <a href="//jabeslima.github.io/Projeto_Login/Arquivos/index.html" target="_blank" className="projeto-link">Ver Projeto</a>
                    </div>
                    <div className="Anime projeto-item">
                        <img src={Anime} alt="anime" />
                        <a href="https://jabeslima.github.io/Anime_Search/ "  target="_blank" className="projeto-link">Ver Projeto</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
