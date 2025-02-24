import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./MenuBar.scss"
import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttonStyles from "../Button/button.scss"

export const MenuBar = () => {
    const location = useLocation(); // Get the current path
    
    return (
        <nav className="menubar-nav">
            <div className="menubar-div-side">
                {location.pathname.includes("portfolio/") && (
                    <Link className="menubar-icon-link" to="/portfolio">
                    <FontAwesomeIcon className='menubar-icon' icon={faArrowLeft} />
                    </Link>
                )}
            </div>
            <div className="menubar-div-center">
            <Link className="menubar-icon-link" to="/">
                <FontAwesomeIcon className='menubar-icon' icon={faHome} />
            </Link>
            </div>
            <div className="menubar-div-side">
            {location.pathname !== "/" && (
                <Link className="button button-lightblue-hover" to="/contact" >Contact</Link>
            )}
            </div>
        </nav>
    )
}