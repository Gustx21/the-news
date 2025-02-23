import { Coffee } from "lucide-react";

function NavBar() {
    return (
        <nav>
            <div id="logo">
                <Coffee />

                <p>The News</p>
            </div>

            <div className="login">
                <a href="http://"><button type="button" className="button-login">Login</button></a>

                <a href="http://"><button type="button" className="button-subscribe">Inscreva-se</button></a>
            </div>
        </nav>
    )
}

export default NavBar;