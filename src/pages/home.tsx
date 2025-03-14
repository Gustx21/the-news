import NavBar from "../components/navbar.tsx";
import Main from "../components/main.tsx";
import Newsletter from "../components/newsletter.tsx";
import Footer from "../components/footer.tsx";

function Home() {
    return (
        <>
            <NavBar />
            <hr />
            <Main />
            <hr />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home;