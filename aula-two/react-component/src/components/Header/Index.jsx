import Audi from "../../Assets/audi.jpg"
import "./styles.css"

export default function Header(params) {

    return(
    <>
    <header>
        <img src={Audi} alt="Carro horroso da audi" />
    <nav>
    
        <a href="">Home</a>
        <a href="">Não sei</a>
    </nav>
        <button-wrapper>

        <button type="button"> Sign in</button>
        <button type="button"> Sign out</button>
        </button-wrapper>
    </header>
    </>
    )

}