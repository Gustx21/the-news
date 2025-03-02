import React, { useState, useEffect } from "react";
import { Mail, RectangleEllipsis, User } from "lucide-react";
import { insertUser } from "../server/database-user";

function Login(): React.JSX.Element {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email) {
            setError('Por favor, insira seu e-mail');
        } else {
            onLogin(name, email, password);
        }
    }

    const handleChange = (event: any) => {
        setEmail(event.target.value);
        setName(event.target.value);
        setPassword(event.target.value);
    }

    return (
        <form method="post" id="inscription" onSubmit={handleSubmit}>
            <div>
                <h2>Um jeito interativo,<br /> divertido e eficaz<br /> de ficar informado</h2>

                <img src="" alt="" />
            </div>
            <div id="form">
                <div>
                    <User />
                    <input type="text" name="name" id="name" value={name} placeholder="Nome Completo" onChange={handleChange} />
                </div>
                <div>
                    <Mail />
                    <input type="email" name="email" id="email" value={email ? email : error} placeholder="E-mail" onChange={handleChange} />
                </div>
                <div>
                    <RectangleEllipsis />
                    <input type="text" name="password" id="password" value={password} placeholder="Insira sua senha" onChange={handleChange} />
                </div>

                <button type="submit" className="subscribe">Inscreva-se</button>
            </div>
        </form>
    )
}

export default Login;

function onLogin(name: string, email: string, password: number | string) {
    const pw = password.toString();

    useEffect(() => {
        insertUser(name, email, pw);
    }, [email]);
}