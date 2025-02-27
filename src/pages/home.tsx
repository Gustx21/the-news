import NavBar from "../components/navbar.tsx";
import Newsletter from "../components/newsletter.tsx";
import Login from "./login.tsx";
import '../style/home.css';

function Home() {
    return (
        <>
            <NavBar />
            <hr />
            <Login />
            <hr />
            <Newsletter />
        </>
    )
}

export default Home;