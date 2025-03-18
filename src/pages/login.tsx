import React, { useEffect } from "react";
import { Mail, RectangleEllipsis, User } from "lucide-react";
import { insertUser } from "../server/database-user";

function Login(): React.JSX.Element {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        
        if (name && email && password) {
            onLogin(name.toString(), email.toString(), password.toString());
        }
    };
    
    return (
        <div className="body">
            <main className="inscription">
                <header>
                    <h1>The News</h1>
                    <p>A leitura é crucial para o desenvolvimento intelectual. Amplia horizontes, aumenta  capacidade de empatia e permite adquirir novos conhecimentos.</p>

                    <img className="img-form" src="./src/assets/img_form.png" alt="Ilustração de um personagem usando notebook para envios de newsletter." />
                </header>
                <form method="post" onSubmit={handleSubmit}>
                    <label className="input">
                        <User />
                        <input type="text" name="name" id="name" placeholder={"Nome"} required />
                    </label>
                    <label className="input">
                        <Mail />
                        <input type="email" name="email" id="email" placeholder={"E-mail"} required />
                    </label>
                    <label className="input">
                        <RectangleEllipsis />
                        <input type="password" name="password" id="password" placeholder={"Senha"} minLength={8} required />
                    </label>

                    <a href="http://localhost:5173/signin">Já tem uma conta?</a>

                    <button type="submit" className="subscribe">Inscreva-se</button>
                </form>
            </main>
        </div>
    )
}

export default Login;

function onLogin(name: string, email: string, password: string) {
    useEffect(() => {
        insertUser(name, email, password);
    }, [name && email && password]);
}