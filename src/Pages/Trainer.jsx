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

      <a className=' text-center font-bold text-xl border-double border-2 border-[#eb3434]  ' >
              Be a Trainer
          </a>
       
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
