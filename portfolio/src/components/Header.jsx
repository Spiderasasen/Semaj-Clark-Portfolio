import "../styles/header.css"
import {useNavigate} from "react-router-dom"

function Header(){
    //making the navigation and connecting the ids to there own system
    const navigate = useNavigate();
    const navItems = [
        {id: "home", text: "Home"},
        {id: "about", text: "About Me"},
        {id: "contact", text: "Contact Me"}
    ];

    //navigating from page to page
    onclick = (e) => {
        switch (e.target.id) {
            case "home":
                navigate("/");
                break;
            case "about":
                navigate("/about");
                break;
        }
    }


    return(
    <header>
        <nav>
            <ul>
                <li id={"home"}>Home</li>
                <li id={"about"}>About Me</li>
                <li id={"contact"}>Contact Me</li>
            </ul>
        </nav>
    </header>
    )
}
export default Header;