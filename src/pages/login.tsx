import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import image from '../assets/career-53.svg';

function Login(): React.JSX.Element {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [streak, setStreak] = useState<number>(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email) {
            setError('Por favor, insira seu e-mail');
        } else {
            onLogin(email);
            setStreak(streak + 1);
        }
    }

    const handleChange = (event: any) => {
        setEmail(event.target.value);
    }

    return (
        <section id="inscription">
            <img src={image} alt="Ilustração com personagem subindo degrais ao topo." />
            <div id="form">
                <h2>Um jeito interativo,<br /> divertido<br /> e eficaz de ler</h2>

                <form method="post" onSubmit={handleSubmit}>
                    <div className="input">
                        <Mail />

                        <input type="email" name="email" id="email" value={email ? email:error} placeholder="Adicione seu E-mail" onChange={handleChange} />

                        <button type="submit" id="subscribe">Inscreva-se</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;

function onLogin(email: string) {
    console.log(email)

    useEffect(() => {

    }, [email]);
}