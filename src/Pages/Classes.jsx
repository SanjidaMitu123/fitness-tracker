import { Helmet } from "react-helmet-async";
import {  useLoaderData } from "react-router-dom";
import Classescard from "./Classescard";

function Classes() {

    const classes = useLoaderData();
    console.log(classes)
    return (
        <div>
            <Helmet>
        <title>Fitness Tracker | Classes</title>
        
      </Helmet>
               <h1 data-aos="fade-up-left" className="text-4xl text-center font-medium">Classes  </h1>


            <div data-aos="fade-up-right" className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 mb-5">
                {
                   
                     // eslint-disable-next-line react/prop-types
                     classes?.map ((class1)=> <Classescard key={class1._id} class1={class1}></Classescard>)
                }
        </div>
            
        </div>
    )
}

export default Classes;
