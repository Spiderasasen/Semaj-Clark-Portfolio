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
            <main className={"about-main"}>
                <h1>About Me</h1>
                <div>
                    <figure>
                        <img id={"semaj"} src={Semaj} alt={"Semaj Clark"}/>
                        <figcaption>
                            <p>
                                I am a Biology (Pre-Veterinary) student at Elon University with a passion for animal care, animal behavior, and veterinary medicine. My long-term goal is to become a zoological veterinarian, combining scientific knowledge, compassion, and hands-on experience to improve animal welfare and conservation efforts.
                                Through my veterinary internship experience, I have gained practical clinical skills while working directly with animals and clients in a professional setting. These experiences strengthened my communication, teamwork, and problem-solving abilities and reinforced the importance of providing excellent care to both animals and their owners.I have also gained experience working with animals through volunteer service and continue to pursue opportunities that expand my understanding of veterinary and zoological sciences.
                            </p>
                            <p>
                                As a Spanish minor, I am developing the ability to communicate with clients from diverse backgrounds and provide support in bilingual settings. My interests include zoo and exotic animal medicine, animal behavior research, wildlife conservation, and veterinary clinical practice. I am committed to lifelong learning and to becoming a skilled, compassionate, and dependable veterinary professional. I have also accumulated over 350 hours of veterinary clinical experience, further strengthening my practical skills and dedication to the field.
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