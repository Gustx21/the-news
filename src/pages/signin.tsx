import { RectangleEllipsis, User } from "lucide-react";
import { getUserByEmail } from "../server/database-user";
import { useNavigate  } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Pegando os Dados do Usuários
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        // Autenticação de Usuários com Dados registrados
        const userExistEmail = email ? getUserByEmail(email.toString()) : null;

        if (email === userExistEmail) {
            console.log("Usuário Cadastrado!");
            navigate("/home"); // Redirecionando para página principal (home)
        } else {
            console.log("Usuário não encontrado!");
        }
    }

    return (
        <div className="body">
            <main className="inscription">
                <header>
                    <h1>The News</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet architecto ullam voluptatibus minus earum? Libero in dolorem ipsa maiores numquam, animi vitae beatae, voluptatum dolores aliquam consequuntur minus. Quae, voluptatibus.</p>

                    <img src="./src/assets/img_form.png" alt="Ilustração de um personagem usando notebook para envios de newsletter." />
                </header>
                <form method="post" onSubmit={handleSubmit}>
                    <label className="input">
                        <User />
                        <input type="email" name="email" id="email" placeholder="E-mail" required />
                    </label>
                    <label className="input">
                        <RectangleEllipsis />
                        <input type="password" name="password" id="password" placeholder="Senha" required />
                    </label>

                    <a href="http://localhost:5173/login">Inscreva-se</a>

                    <button type="submit" className="subscribe">Entrar</button>
                </form>
            </main>
        </div>
    )
}

export default SignIn;