import { Link } from 'react-router-dom';
 

const Welcome = (props) => {


    return (
        <section className="items-center justify-center  text-center">
            <h2 className="items-center justify-center  text-center px-5 text-3xl font-bold lg:text-5xl">
                Wellcome to DoggyDayCare 
                </h2>
            <p className="my-8">Check registered dogs</p>
            <Link to="/Home">
                <button >Start!</button>
            </Link>
        </section>
    )
}

export default Welcome;
