import React, { useEffect, useState } from "react";

function Input() {
    const [message, setMessage] = useState("");

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleInscribe = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");

        if (email && validateEmail(email.toString())) {
            onLogin(email.toString());
            setMessage("Inscrição realizada com sucesso!");
        } else {
            setMessage("E-mail inválido! Por favor insira um e-mail válido.");
        }
    }

    return (
        <form action="https://gustx21.substack.com/subscribe" method="post" target="_blank" onSubmit={handleInscribe} id="form-components">
            <input type="email" name="email" id="email" placeholder="Receba conteúdo no seu E-mail" required />
            <button type="submit" className="subscribe">Inscreva-se</button>
        </form>
    )
}

function onLogin(email: string) {
    useEffect(() => {
        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
    }, [email]);
}

export default Input;