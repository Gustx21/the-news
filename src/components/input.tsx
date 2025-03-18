import React from "react";

function Input() {
    const handleInscribe = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
    }

    return (
        <form method="post" onSubmit={handleInscribe} id="form-components">
            <input type="email" name="email" id="email" placeholder="Receba conteúdo no seu E-mail" required />
            <button type="submit" className="subscribe">Inscreva-se</button>
        </form>
    )
}

export default Input;