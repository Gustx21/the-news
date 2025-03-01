import image from '../assets/career-53.svg';

function Main() {
    return (
        <main>
            <img src={image} alt="Ilustração com personagem subindo degrais ao topo." />

            <nav className='main-content'>
                <h1>O <span>conhecimento</span><br/>abre portas</h1>

                <a href="http://localhost:5173/login"><button className='subscribe'>Comece já</button></a>
            </nav>
        </main>
    )
}

export default Main;