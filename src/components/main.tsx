import Input from "./input";
import career from "../assets/career.svg"

function Main() {
    return (
        <main>
            <img src={career} alt="Ilustração com personagem subindo degrais ao topo." />

            <form className='main-content'>
                <h1>O <span>conhecimento</span><br/>abre portas</h1>

                <Input />
            </form>
        </main>
    )
}

export default Main;