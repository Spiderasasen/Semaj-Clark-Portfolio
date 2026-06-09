import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/main.css";
import links from "../data/links.json"
import Link_Card from "../components/Link_Card.jsx";
import "../styles/contact_card.css"
import React from "react";

function Contact(){
    React.useEffect(() => {
        document.title = "Contact Me";
    })

    return(
        <>
            <Header/>

            <main>
                <h1>Contact Me</h1>
                <div className={"Links_container"}>
                    {links.map((link) => (
                        <Link_Card key={link.id} name={link.name} link={link.link}/>
                    ))}
                </div>
            </main>

            <Footer/>
        </>
    )
}
export default Contact;