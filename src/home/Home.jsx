import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import MyNavbar from "../components/mynavbar/MyNavbar";
import SocialMedia from "../components/socialMedia/SocialMedia";
import Services from "../components/services/services";
import MyAccordion from "../components/myaccordion/MyAccordion";


function Home() {
    return (
        <>
            <MyNavbar />
            <About />
            <Services />
            <MyAccordion />
            <Contact />
            <SocialMedia />
        </>
    )
}

export default Home;