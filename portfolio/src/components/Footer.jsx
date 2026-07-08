import "../styles/footer.css"
import Profile from "../assets/Semaj Clark Resume 2027.pdf";

function Footer() {
    return(
        <footer>
            <a
                className={"resume-link"}
                href={Profile}
                target={"_blank"}
            >
                Want my resume? Click here!
            </a>
        </footer>
    )
}
export default Footer;