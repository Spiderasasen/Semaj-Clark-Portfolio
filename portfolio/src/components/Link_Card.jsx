function Link_Card({name, link}) {
    if (name !== "email" && name !== "phone"){
        return(
            <a href={link} target={"_blank"}>
                {name}
            </a>
        )
    }
    else if (name === "email") {
        return(
            <a href={"mailto:" + link}>
                {name}
            </a>
        )
    }
    else if (name === "phone") {
        return(
            <p>
                {name}: {link}
            </p>
        )
    }
}
export default Link_Card;