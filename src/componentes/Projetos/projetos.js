import './projetos.css';

function Projetos() {
  return (
    <div className="projetos">
      <h5>Meus Projetos</h5>
      <a href='https://organogames.netlify.app' target='_blank' rel='noopener noreferrer'>
        <div className='projetos-itens'>
          <div className="conteudo">
            <img src={'./logoaa.png'} alt="Projeto 1" />

            <div className="descricao">
              <h6>Organo Games</h6>
              <p>Organo Games é um projeto que consiste em você poder criar cards dos seus jogos com alguns atributos como, nome, plataforma, imagem
                e organiza-los em seções por genero/categoria<br/><br/>
                Tecnologias utilizadas: HTML, CSS, JavaScript e ReactJS.</p>
            </div>
            
          </div>
        </div>
      </a>

      <a href='https://tecladoinstrumental.netlify.app' target='_blank' rel='noopener noreferrer'>
      <div className='projetos-itens'>
        <div className="conteudo">
              <img src={'./teclado.png'} alt="Projeto 1" />

              <div className="descricao">
                <h6>Teclado Instrumental</h6>
                <p>Teclado Instrumental é um pequeno projeto onde você pode clicar em diferentes botões de um teclado e reproduzir sons de diferentes tipos.<br/><br/>
                  Tecnologias utilizadas: HTML, CSS e JavaScript.
                </p>
              </div>
            </div>
      </div>
      </a>

      <a href='https://bookstand.netlify.app' target='_blank' rel='noopener noreferrer'>
      <div className='projetos-itens'>
        <div className="conteudo">
              <img src={'./alurabooks2.png'} alt="Projeto 3" />

              <div className="descricao">
                <h6>AluraBooks</h6>
                <p>AluraBooks é uma plataforma onde disponibiliza varios livros de diferentes
                   areas da programação e nessa platafortma é possivel filtrar a busca dos livros por preço, disponibilidade ou area.<br/><br/>
                  Tecnologias utilizadas: HTML, CSS e JavaScript.
                </p>
              </div>
            </div>
      </div>
      </a>

      <a href='https://wallpapergallery.netlify.app' target='_blank' rel='noopener noreferrer'>
      <div className='projetos-itens'>
        <div className="conteudo">
              <img src={'./wallpapergallery.png'} alt="Projeto 3" />

              <div className="descricao">
                <h6>Wallpaper Gallery</h6>
                <p>Wallpaper Gallery é um site que exibe imagens e conta com um filtro para filtrar as categorias das imagens.<br/><br/>
                  Tecnologias utilizadas: HTML, CSS e JavaScript.
                </p>
              </div>
            </div>
      </div>
      </a>

    </div>
  )
}

export default Projetos;
