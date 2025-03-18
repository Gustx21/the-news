import { RectangleEllipsis, User } from "lucide-react";

function SignIn() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const password = formData.get("password");

        if (name && password) {
            console.log(name, password);
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
                        <input type="text" name="name" id="name" placeholder="Nome" />
                    </label>
                    <label className="input">
                        <RectangleEllipsis />
                        <input type="password" name="password" id="password" placeholder="Senha" />
                    </label>

                    <a href="http://localhost:5173/login">Já tem uma conta?</a>

                    <button type="submit" className="subscribe">Entrar</button>
                </form>
            </main>
        </div>
    )
}

export default SignIn;