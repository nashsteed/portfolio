import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import buttonStyles from "../Button/button.scss"
import { clsx } from "clsx";
import "../Copyright/copyright.scss"

export const Copyright = () => {
    const location = useLocation(); // Get the current path

    return (
        <div className="bottom-div">
            <h5>created and coded by nash steed designs</h5>
        </div>
    )
}