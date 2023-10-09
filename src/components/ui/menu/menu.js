import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTimeline, faGamepad, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import './menu.css';

function Menu() {
    return (
        <div className="menu">
            <div><FontAwesomeIcon icon={faHouse} /></div> •
            <div><FontAwesomeIcon icon={faTimeline} /></div> •
            <div><FontAwesomeIcon icon={faGamepad} /></div> •
            <div><FontAwesomeIcon icon={faAddressCard} /></div>
        </div>
    );
}

export default Menu;
