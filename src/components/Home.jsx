import React, {useState, useEffect} from 'react'

export default function Home() {
const [dogs, setDogs] = useState([]);
const url = "https://api.jsonbin.io/v3/b/64254cc2ace6f33a22007d35";

useEffect(() => {
    const fetchDogData = async() => {
        try{
            const res = await fetch(url, { headers: {
                "X-Master-Key" : "$2b$10$ijNUzOvWqtFAJ3EUlMybSeUrqUYdr.2GNXAEAEsf5/cTY1MtsBVHS"
            }});
            const data = await res.json();
            setDogs(data);
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
    <section className="p-8 max-w-6xl mx-auto">
        <div className="text-center">
        <h1 className="flex items-center justify-center  text-center px-5 text-3xl font-bold lg:text-5xl ">
            The Dog Daycare App
        </h1>
        <p className="my-8">
        {dogs.record.length} dogs registered. This appication is powered by {""}
            <a href="https://jsonbin.io" className="text-indigo-600 underline active:text-orange-400">jsonbin.io</a>
        </p>
        <form>
            
        </form>
        </div>
    </section>
    </>)}
    </>
  )
}



