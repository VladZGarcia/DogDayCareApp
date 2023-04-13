import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function SingleDog() {

  const url = "https://api.jsonbin.io/v3/b/64254cc2ace6f33a22007d35?meta=false";
  // const [dog, setDog] = useState([]);

  const { index } = useParams();

  let dogsLocal = JSON.parse(localStorage.getItem("dogs"));
  console.log(dogsLocal)

  //     if (dogsLocal.length == 0) {
  //   useEffect(() => {
  //     console.log(index)
  //     const fetchSingleDogData = async () => {
  //       try {
  //         const res = await fetch(url, {
  //           headers: {
  //             "X-Master-Key": "$2b$10$ijNUzOvWqtFAJ3EUlMybSeUrqUYdr.2GNXAEAEsf5/cTY1MtsBVHS"

  //           }
  //         });
  //         const data = await res.json();
  //         // const singleDog = data[index]
  //         setDog(data[index]);

  //         console.log(data[index])
  //         localStorage.setItem('dogs', JSON.stringify(dogs));

  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }

  //     fetchSingleDogData();

  //   }, [index])
  //   dogsLocal = JSON.parse(localStorage.getItem("dogs"));
  //   console.log(dogsLocal)
  // }
  let dog = (dogsLocal[index]);
  console.log(dog)
  return (
       <>
        <section className="max-w-5xl mx-auto flex items-center justify-center h-screen">
          <div
            key={dog.chipNumber}
            className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center">
            <article>
              <img src={dog.img} alt={dog.name} />
            </article>
            <article>
              <h1 className="text-3xl font-bold text-white mb-8 lg:text-5xl">{dog.name}</h1>
              <ul className="text-sm text-slate-400 leading-loose lg:text-base lg:leading-relaxed">
                <li><span className="font-bold text-slate-200">Age:</span>  {dog.age}</li>
                <li><span className="font-bold text-slate-200">Breed:</span> {dog.breed}</li>
                <li><span className="font-bold text-slate-200">ChipNumber:</span> {dog.chipNumber}</li>
                <li><span className="font-bold text-slate-200">OwnerName:</span> {dog.owner.name} </li>
                <li><span className="font-bold text-slate-200">OwnerLastName:</span> {dog.owner.lastName} </li>
                <li><span className="font-bold text-slate-200">PhoneNumber:</span> {dog.owner.phoneNumber} </li>
                <li><span className="font-bold text-slate-200">Sex:</span> {dog.sex}</li>
                <li> {dog.present ? <p className="text-white text-lg">Present</p> : <p>not present</p>}</li>
              </ul>
              <Link
                to="/Home"
                className="inline-block bg-slate-600 py-2 px-6 rounded mt-8 text-white hover:bg-slate-500 transition-all duration-200"
              >
                &larr; Back
              </Link>
            </article>
          </div>
        </section>
      </>
  )
}
