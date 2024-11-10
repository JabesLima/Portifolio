//todo: import do style
import './styles/App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';

//todo: imports de paginas
import Cabecario from './pages/Cabecario';
import SobreMim from './pages/SobreMim'
import Habilidades from './pages/Habilidades';
import Projetos from './pages/Projetos';
import Servicos from './pages/Servicos';
import Tema from './pages/Tema';

function App(){

  // todo: Adicionando windowScroll nas row
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.row');
      const triggerDistance = 200;
      sections.forEach((section) => {
        const sectionElement = section;
        const sectionTop = sectionElement.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - triggerDistance && sectionTop > 0) {
          sectionElement.classList.add('active');
        } else if (sectionTop > triggerDistance) {
          sectionElement.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
      <div className='container_principal'>
      <div><Cabecario /></div>
      <div><Tema /></div>
      <div><SobreMim /></div>
      <div className="row"><Habilidades /></div>
      <div className="row"><Projetos /></div>
      <div className="row"><Servicos /></div>
      <footer><p>© 2024 Paulo Jabes Lima da Silva</p></footer>
    </div>
  );
};

export default App;

