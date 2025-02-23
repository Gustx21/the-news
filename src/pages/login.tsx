import React, { useState } from "react";

const [email, setEmail] = useState<string>('');
const [senha, setSenha] = useState<string>('');
const [error, setError] = useState<string>('');
const [streak, setStreak] = useState<number>(0);

function Login(): React.JSX.Element {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email) {
            setError('Por favor, insira seu e-mail');
        } else {
            onLogin(email, senha);
            setStreak(streak + 1);
        }
    }

    const handleChange = (event: any) => {
        setEmail(event.target.value);
        setSenha(event.target.value);
    }

    return (
        <>
            <h2>Login</h2>
            <form action="" method="post" onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" value={email} placeholder="E-mail" onChange={handleChange} />

                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" value={senha} placeholder="Senha" onChange={handleChange} />

                <button type="submit"></button>
            </form>
            <div>{error}</div>
        </>
    )
}

export default Login;

function onLogin(email: string, password: string) {
    console.log(email, password)
}