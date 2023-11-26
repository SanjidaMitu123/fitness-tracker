import { Link } from "react-router-dom";


function Trainercard({teacher}) {
    const  { _id, email,name,age,skill,timeinweek,timeinday,fee,img }=teacher;
    return (
        <div>
            <div>
            <div data-aos="zoom-out-up" key={_id}   className="relative m-11 h-[450px] flex  w-69 flex-col rounded-xl mt-5 bg-clip-border text-gray-700 shadow-md">
      
      <div  className="relative mb-5  h-36 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img
          src={img}
          className="h-full w-full object-cover "
        />
      </div>
    
      <div className="p-2">
        <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
          <p className="block font-sans text-center text-xl font-medium leading-relaxed text-cyan-500 antialiased">
          {name}
          </p>
          <p className="block font-sans text-center text-s font-medium leading-relaxed text-lime-500 antialiased">
          {email}
          </p>
    
        </div>
      </div>
      <div className="p-2">
        <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
          <p className="block font-sans text-sm text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
          Skills:{skill}
          </p>
    
        </div>
      </div>
      <div className="p-2">
        <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
          <p className="block font-sans text-sm text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
          Age :{age} | Fees :{fee}
          </p>
    
        </div>
      </div>
      <div className="p-2">
        <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
          <p className="block text-xl font-sans text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            Available in week: {timeinweek} days    |Available each day: {timeinday} hr 
          </p>
    
        </div>
      </div>
      <Link to={`/teacher/${_id}`}>
      <div className="p-2 pt-2">
        <button
          className="block text-xl border-solid border-2 border-[#ff44b7] text-black w-[50%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Know more
        </button>
      </div>
      </Link>
    </div> 
            
        </div>
        </div>
    )
}

export default Trainercard;
