import "../styles/contact_card.css"

function Link_Card({name, link}) {
    if (name !== "Email" && name !== "Phone"){
        return(
            <a className={"link-card"} href={link} target={"_blank"}>
                {name}
            </a>
        )
    }
    else if (name === "Email") {
        return(
            <a className={"link-card"} href={"mailto:" + link}>
                {name}
            </a>
        )
    }
    else if (name === "Phone") {
        return(
            <p className={"link-card"}>
                {name}: {link}
            </p>
        )
    }
}
export default Link_Card;