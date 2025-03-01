import { Coffee } from "lucide-react";

function Footer() {
    return (
        <footer>
            <div>
                <Coffee />
                <p>The News</p>
            </div>
            <nav>
                <h3>Recursos</h3>
                <a href="#" target="_blank" rel="noopener noreferrer">Artigos</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Primeiro Post</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Nosso Canal no Youtube</a>
            </nav>
            <nav>
                <h3>Sobre</h3>
                <a href="#" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Direitos Autorais</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Termos de Uso</a>
            </nav>
            <nav>
                <h3>Suporte</h3>
                <a href="#" target="_blank" rel="noopener noreferrer">Central de Ajuda</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Comunidade Discord</a>
                <a href="#" target="_blank" rel="noopener noreferrer">E-mail da The News</a>
            </nav>
        </footer>
    )
}

export default Footer;