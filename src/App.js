import Cabecario from './componentes/Cabecario/Cabecario.js';
import Intro from './componentes/intro/intro.js';
import Tecno from './componentes/Tecnologias/tecno.js';
import Descricao from './componentes/Descricao/descricao.js';
import DarkMode from './componentes/DarkMode/darkMode.js';
import Projetos from './componentes/Projetos/projetos.js';

import { useState } from 'react';

function App() {
  const [alterarDarkMode, setAlterarDarkMode] = useState(false);

  const darkModeAtivado = () => {
    setAlterarDarkMode(!alterarDarkMode);
  }

  return (
    <div className={`app ${alterarDarkMode ? 'dark' : ''}`}>
      <Cabecario alterarDarkMode={alterarDarkMode}/>
      <Intro alterarDarkMode={alterarDarkMode}/>
      <Tecno alterarDarkMode={alterarDarkMode}/>
      <Descricao alterarDarkMode={alterarDarkMode}/>
      <DarkMode alterarDarkMode={alterarDarkMode} darkModeAtivado={darkModeAtivado}/>
      <Projetos alterarDarkMode={alterarDarkMode}/>
    </div>
  );
}

export default App;
