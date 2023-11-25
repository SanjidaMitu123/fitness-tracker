import { Link, useLoaderData } from "react-router-dom";
import Trainercard from "./Trainercard";
import { Helmet } from "react-helmet-async";


function Trainer() {
    const teachers = useLoaderData();
    console.log(teachers)
    return (
        <div>
            <Helmet>
        <title>Fitness Tracker | Trainer</title>
        
      </Helmet>
               <h1 data-aos="fade-up-left" className="text-4xl text-center font-medium">Trainers  </h1>

               <Link to={'/addteacher'}>
      <div className="p-2 pt-2">
        <button
          className="block text-xl border-solid border-2 border-[#ff44b7] text-black w-[90%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Be a Trainer
        </button>
      </div>
      </Link>

            <div data-aos="fade-up-right" className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 mb-5">
                {
                   
                     // eslint-disable-next-line react/prop-types
                     teachers?.map ((teacher)=> <Trainercard key={teacher._id} teacher={teacher}></Trainercard>)
                }
        </div>
            
        </div>
    )
}

export default Trainer;
