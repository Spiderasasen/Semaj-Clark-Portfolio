import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/main.css";
import "../styles/about.css";
import Semaj from "../assets/semaj.jpeg";

function About(){
    return(
        <>
            <div>
                <Header/>
            </div>
            <main>
                <h1>About Me</h1>
                <div>
                    <figure>
                        <img id={"semaj"} src={Semaj} alt={"Semaj Clark"}/>
                        <figcaption>
                            <p>
                                I’m a STEM student at Elon University with a strong focus on the biological sciences and a clear passion for animal care. My long‑term goal is to pursue veterinary medical training and become a dedicated veterinary assistant who brings compassion, curiosity, and scientific understanding to every patient I work with.
                            </p>

                            <p>
                                During my internship at the veterinary clinic near Elon University, I gained hands‑on experience working with animals in a real clinical environment. That experience also strengthened my customer service skills and taught me how important communication is in veterinary care. As I stated in a recent interview, “In veterinary sciences, you have to be good with animals but good with people also. Every day, I always strive to either meet new people or get more social.”
                            </p>

                            <p>
                                I’m also minoring in Spanish, which allows me to communicate confidently in two languages and support Spanish‑speaking families in veterinary settings. Whether I’m assisting with clinical tasks, helping clients feel comfortable, or learning from experienced professionals, I’m committed to growing into a well‑rounded, reliable member of the veterinary field.
                            </p>
                        </figcaption>

                    </figure>
                </div>
            </main>
            <div>
                <Footer/>
            </div>
        </>
    )
}
export default About;