import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/main.css";
import links from "../data/links.json"
import Link_Card from "../components/Link_Card.jsx";

function Contact(){
    return(
        <>
            <div>
                <Header/>
            </div>

            <main>
                <h1>Contact Me</h1>
                <div className={"Links_container"}>
                    {links.map((link) => (
                        <Link_Card key={link.id} name={link.name} link={link.link}/>
                    ))}
                </div>
            </main>

            <div>
                <Footer/>
            </div>
        </>
    )
}
export default Contact;