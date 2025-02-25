import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./TabBar.scss"
import buttonStyles from "../Button/button.scss"
import { clsx } from "clsx";

export const TabBar = () => {
    const location = useLocation(); // Get the current path

    if (location.pathname === "/" || location.pathname === "/about" || location.pathname === "/contact") return null;
    
    return (
        <nav className="tabbar-nav">
            <Link className={clsx("button button-lightblue-hover",location.pathname.includes("portfolio") && "button-lightblue")} to="/portfolio">Design</Link>
            <Link className={clsx("button button-lightblue-hover",location.pathname.includes("music") && "button-lightblue")}to="/music" >Music</Link>
            <Link className={clsx("button button-lightblue-hover",location.pathname.includes("art") && "button-lightblue")}to="/art" >Art</Link>
        </nav>
    )
}