import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const [dogs, setDogs] = useState([]);
    const url = "https://api.jsonbin.io/v3/b/64254cc2ace6f33a22007d35";

    useEffect(() => {
        const fetchDogData = async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        "X-Master-Key": "$2b$10$ijNUzOvWqtFAJ3EUlMybSeUrqUYdr.2GNXAEAEsf5/cTY1MtsBVHS"
                    }
                });
                const data = await res.json();
                setDogs(data.record);
                console.log(data);

            } catch (error) {
                console.error(error);
            }
        }

        fetchDogData();
    }, [])

    return (
        <>
            {!dogs ? (
                <h1 className="flex items-center justify-center  text-center px-5 text-3xl h-screen font-bold uppercase">Loading...</h1>
            ) : (<>
                <section className="p-8 max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="flex items-center justify-center  text-center px-5 text-3xl font-bold lg:text-5xl ">
                            The Dog Daycare App
                        </h1>
                        <p className="my-8">
                            {dogs.length} dogs registered. This appication is powered by {""}
                            <a href="https://jsonbin.io" className="text-indigo-600 underline active:text-orange-400">jsonbin.io</a>
                        </p>
                        <form className="max-w-xl mx-auto" autoComplete="off">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search for a dog / breed"
                                className=" py-2 px-4 rounded shadow w-full"
                            />
                        </form>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg-20">
                        {dogs.map((dog) => (
                            <Link 
                            to={`/${dog.name}`}
                            key={dog.chipNumber}
                            >
                            <article className="bg-slate-700 p-4 rounded" >
                                <img
                                    src={dog.img}
                                    alt={dog.name}
                                    loading="lazy"
                                    className="rounded md:h-72 w-full object-cover" />
                                <h3 className="text-white text-lg font-bold mt-4">
                                    {dog.name}
                                </h3>
                                <p className="text-slate-400">Breed: {dog.breed}</p>
                            </article>
                            </Link>
                        ))}
                    </div>
                </section>
            </>)}
        </>
    )
}