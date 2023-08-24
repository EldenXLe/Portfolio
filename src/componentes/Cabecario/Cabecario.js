import './cabecario.css';
import 'normalize.css';
import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';

function Cabecario() {
  return (
    <div className="cabecario">
      <header>
        <div className="nome">
          <h1>Leandro Cesar da Silva Rodrigues</h1>

          <div className="redes">
            <a href='https://www.linkedin.com/in/leandro-cesar-3852781b8/' target='_blank' rel='noopener noreferrer'> 
                <SiLinkedin size={30} color='white'/> </a>
            <a href='https://github.com/EldenXLe' target='_blank' rel='noopener noreferrer'> 
                <SiGithub size={30} color='white'/> </a>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Cabecario;
