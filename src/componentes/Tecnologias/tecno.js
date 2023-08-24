import {ImHtmlFive} from 'react-icons/im';
import {SiCss3} from 'react-icons/si';
import {SiJavascript} from 'react-icons/si';
import {SiReact} from 'react-icons/si';
import './tecno.css';

function Tecno() {
    return (
        <div className="tecno">
            <h3>Tecnologias</h3>
            <div className='tecno-logos'>
                <p>HTML5</p><ImHtmlFive size={40} color='#E44D26'/>
                <p>CSS3</p><SiCss3 size={40} color='#2965F1'/>
                <p>ReactJS</p><SiReact size={40} color='#61DBFB'/>
                <p>JavaScript</p><SiJavascript size={40} color='#F0DB4F'/>
            </div>
            
        </div>
    );
}

export default Tecno;