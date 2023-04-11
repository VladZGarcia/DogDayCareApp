import { Link } from 'react-router-dom';
 

const Welcome = (props) => {


    return (
        <section>
            <h2>Välkommen till DogDayCare</h2>
            <p>Vill du sätt igång?</p>
            <Link to="/Home">
                <button >Ja!</button>
            </Link>
        </section>
    )
}

export default Welcome;
