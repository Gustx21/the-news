import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";

function Login(): React.JSX.Element {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>()
    const [error, setError] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email) {
            setError('Por favor, insira seu e-mail');
        } else {
            onLogin(email);
        }
    }

    const handleChange = (event: any) => {
        setEmail(event.target.value);
        setName(event.target.value)
    }

    return (
        <section id="inscription">
            <h2>Um jeito interativo,<br /> divertido e eficaz<br /> de ficar informado</h2>

            <form method="post" onSubmit={handleSubmit}>
                <div className="input">
                    <Mail />

                    <input type="text" name="name" id="name" value={name} placeholder="Nome Completo" onChange={handleChange}/>
                    <input type="email" name="email" id="email" value={email ? email : error} placeholder="E-mail" onChange={handleChange} />

                    <button type="submit" className="subscribe">Inscreva-se</button>
                </div>
            </form>
        </section>
    )
}

export default Login;

function onLogin(email: string) {
    useEffect(() => {
        fetch("http://localhost:5000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        })
    }, [email]);
}