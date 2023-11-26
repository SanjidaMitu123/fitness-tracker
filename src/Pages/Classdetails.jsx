import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";


function Classdetails() {

    const [classdetails,setclassdetails] = useState ({});

    const {_id} = useParams();
    
    const classes = useLoaderData();


    useEffect(()=>{
        const finddetails = classes?.find((class2)=> class2._id == _id)


        setclassdetails(finddetails);


},[_id,classes])


    const { traineremail,classname,classhr,description,timeinweek,dayname,fee,img }= classdetails || {}

    return (
        <div>
             <Helmet>
        <title>Fitness Tracker | Class Details</title>
        
      </Helmet>

<div>
            <h1 className="text-4xl text-center font-medium"> Class Details</h1>
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
        {classname}|Class (hr):{classhr}
        </p>
      
      
  
      </div>
    </div>
    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
      <p className="block text-[#0B0B0BB2] font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        Trainer Email : {traineremail}
        </p>
       
  
      </div>
      
      
    </div>

    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
      
        <p className="block text-[#0B0B0BB2] font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
         {description}
        </p>
       
  
      </div>
      
      
    </div>

    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
     
        <p className="block text-[#0B0B0BB2] font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        
        Fees : {fee}(Approximately)
        
        </p>
  
      </div>
      
      
    </div>


    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
        <p className="block text-black font-bold font-sans text-3xl leading-relaxed text-blue-gray-900 antialiased">
        Available in a week {timeinweek} days |  {dayname} 
        </p>
  
      </div>
    </div>
    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
     
       
  
      </div>
      
      
    </div>

    <div className="p-2 pt-2  h-14  ">
      
    
      <Link to={'/class'}> <button 
     //   onClick={addtocart}
           className="block absolute ml-0 bg-blue-600 h-[40px] mb-2 text-white w-[30%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
         type="button"
       >
    See all classes
       </button>
       </Link>
     </div>
   
    
    <div className="p-2 pt-2  h-14  ">
      
    
     <Link to={`/classes/${_id}`}> <button 
    //   onClick={addtocart}
          className="block absolute ml-0 bg-blue-600 h-[40px] mb-2 text-white w-[30%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
    BOOK CLASSES Now
      </button>
      </Link>
    </div>
  </div>
            
        </div>
        </div>
    )
}

export default Classdetails;
