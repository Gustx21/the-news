import NavBar from "../components/navbar.tsx";
import Section from "../components/section.tsx";
import Login from "./login.tsx";
import '../style/home.css';

function Home() {
    return (
        <>
            <NavBar />
            <hr />
            <Login />
            <hr />
            <Section />
        </>
    )
}

export default Home;