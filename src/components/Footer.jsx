import React from "react";
import "./all-styles.css";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright ⓒ DMC {year}</p>
        </footer>
    );
}

export default Footer;
