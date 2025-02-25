import { Coffee } from "lucide-react";

function NavBar() {
    return (
        <nav>
            <div id="logo">
                <Coffee />

                <p>The News</p>
            </div>

            <div className="login">
                <a href="http://localhost:3000/login"><button type="button" className="button-login">Inscrever-se</button></a>

                <a href="http://localhost:3000/singin"><button type="button" className="button-sing-in">Entrar</button></a>
            </div>
        </nav>
    )
}

export default NavBar;