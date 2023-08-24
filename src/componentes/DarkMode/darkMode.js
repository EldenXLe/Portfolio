import './darkMode.css'
import {BsFillSunFill} from 'react-icons/bs'
import {BsFillMoonStarsFill} from 'react-icons/bs'
function DarkMode({alterarDarkMode, darkModeAtivado}) {
    return (
        <button className="darkm" onClick={darkModeAtivado}>
            {alterarDarkMode ? <BsFillMoonStarsFill size={25} color='black'/> : <BsFillSunFill size={25} color='yellow'/>}
            
        </button>
    );
}

export default DarkMode;