import Header from "../components/Header.jsx"
import "../styles/artical.css"

function Home() {
    return (
        <>
            {/*header code*/}
            <div>
                <Header />
            </div>

            {/*main code*/}
            <main>
                {/*artical link*/}
                <div>
                    <a className="vet-article-link"
                       href={"https://www.elon.edu/u/news/2025/08/04/campus-alamance-celebrates-five-years-of-elon-students-in-the-community/"}
                       target={"_blank"}>
                        Read Semaj Clark's being featured in Elon News Article
                    </a>
                </div>
            </main>
        </>
    )
}
export default Home;