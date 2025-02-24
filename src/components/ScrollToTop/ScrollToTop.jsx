import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "../Home";
import Portfolio from "../Portfolio";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on route change
    }, [pathname]);

    return null;
};

export default ScrollToTop;
