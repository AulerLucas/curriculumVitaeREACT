import './style.css'
import Logo from '../../assets/logo.svg'

function Main() {
    return (
        <div className='main'>

            <ul>
            <img src={Logo} alt="Foto de perfil de fulano de tal" />
                <h1>Lucas Auler Bonfante</h1>
                <h2>Estudante no Colégio Ulbra São Lucas</h2>
                <p>Tecnologias que mais conheço: </p>
                <li>JavaScript</li>
                <li>React.Js</li>
            </ul>
        </div>
    )
}

export default Main;