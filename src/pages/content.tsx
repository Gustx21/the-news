import Footer from "../components/footer.tsx";
import NavBar from "../components/navbar.tsx";
import Section from "../components/newsletter.tsx";

function Content() {
    return (
        <>
            <NavBar />
            <hr />
            <Section/>
            <hr />
            <Footer />
        </>
    )
}

export default Content;