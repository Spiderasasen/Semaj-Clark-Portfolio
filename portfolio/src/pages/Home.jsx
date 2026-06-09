import Header from "../components/Header.jsx"
import "../styles/artical.css"
import "../styles/main.css"
import Certification from "../assets/certification1.png";
import Certification2 from "../assets/certification2.png";
import Footer from "../components/Footer.jsx";

function Home() {
    return (
        <>
            {/*header code*/}
            <div>
                <Header />
            </div>

            {/*main code*/}
            <main>
                <h1>Hi, im Semaj Clark!</h1>
                {/*artical link*/}
                <div className="vet-article-container">
                    <figure>
                        <img src={"https://marvel-b1-cdn.bc0a.com/f00000000297652/eloncdn.blob.core.windows.net/eu3/sites/74/2025/07/Wu_Semaj-with-Elon-Vet_250710-0019.jpg"} alt={"Semaj Clark with a dog"}/>
                        <figcaption>
                            <a className="vet-article-link"
                               href={"https://www.elon.edu/u/news/2025/08/04/campus-alamance-celebrates-five-years-of-elon-students-in-the-community/"}
                               target={"_blank"}>
                                Read Semaj Clark's being featured in Elon News Article
                            </a>
                        </figcaption>
                    </figure>
                </div>

                {/*conatiner for certifaction images*/}
                <div className="certification">
                    <h3>Certifications</h3>
                    <div className="certification-container">
                        <img src={Certification} alt={"certification image"}/>
                        <img src={Certification2} alt={"certification image"}/>
                    </div>
                </div>

                <div className="resume">
                  <Footer />
                </div>
            </main>
        </>
    )
}
export default Home;