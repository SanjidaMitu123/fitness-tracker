import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";


function Trainerdetails() {

    const [teacherdetails,setteacherdetails] = useState ({});

    const {_id} = useParams();
    
    const teachers = useLoaderData();


    useEffect(()=>{
        const finddetails = teachers?.find((teacher1)=> teacher1._id == _id)


        setteacherdetails(finddetails);


},[_id,teachers])


    const {email,name,age,skill,timeinweek,timeinday,fee,img }= teacherdetails || {}

    return (
        <div>
           <Helmet>
        <title>Fitness Tracker | Trainer Profile</title>
        
      </Helmet>

<div>
            <h1 className="text-4xl text-center font-medium">Trainer Profile</h1>
            <div  key={_id}  className="relative flex w-69 flex-col rounded-xl mt-5 bg-clip-border text-gray-700 shadow-md">
    
    <div  className="relative  h-[400px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
      <img
        src={img}
        className="h-full w-full object-cover relative"
      />
    </div>
   
    <div className="p-2 mb-2">
      <div className=" mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
        <p className="block ml-60 mt-2 text-5xl text-black font-sans ml-[-15px] font-medium leading-relaxed text-blue-gray-900 antialiased">
        {name}
        </p>
      
      
  
      </div>
    </div>
    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
      <p className="block text-[#0B0B0BB2] font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        Skills : {skill}
        </p>
       
  
      </div>
      
      
    </div>

    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
      
        <p className="block text-[#0B0B0BB2] font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        email:{email} || Age : {age}
        </p>
       
  
      </div>
      
      
    </div>

    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
     
        <p className="block text-[#0B0B0BB2] font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        Available in a week {timeinweek} days |  Available in a day {timeinday} hrs
        </p>
  
      </div>
      
      
    </div>


    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
        <p className="block text-black font-bold font-sans text-3xl leading-relaxed text-blue-gray-900 antialiased">
        Fees : {fee}(Approximately)
        </p>
  
      </div>
    </div>
    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
     
       
  
      </div>
      
      
    </div>

    <div className="p-2 pt-2  h-14  ">
      
    
      <Link to={'/addclass'}> <button 
     //   onClick={addtocart}
           className="block absolute ml-0 bg-blue-600 h-[40px] mb-2 text-white w-[30%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
         type="button"
       >
     Add class
       </button>
       </Link>
     </div>
   
    
    <div className="p-2 pt-2  h-14  ">
      
    
     <Link to={`/bidnow/${_id}`}> <button 
    //   onClick={addtocart}
          className="block absolute ml-0 bg-blue-600 h-[40px] mb-2 text-white w-[30%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
    BOOK TRAINER CLASSES
      </button>
      </Link>
    </div>
  </div>
            
        </div>
            
        </div>
    )
}

export default Trainerdetails;
