import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../firebase/Authprovider";


function Navbar() {

   const {user, logout}= useContext(AuthContext);

   const singOUT = () =>{
       logout()
         .then()
         .catch()
    }
    return (
        <div>
            <div >
               
        <nav data-aos="fade-down" className="lg:flex sm:grid sm:grid-cols-3 lg:ml-[40px] text-center items-center relative ">
        <Logo></Logo>
            <ul className=" lg:flex  sm:grid sm:grid-cols-3 lg:ml-12 text-right sm:gap-2 lg:gap-6 mr-6 lg:font-extrabold sm:font-bold lg:text-2xl text-black ">
                <li>
                  
                  

                    <NavLink
                     to="/"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#eb3434] underline" : ""
                      }
                     >
                      Home
                   </NavLink>
                   </li>
                   <li>
                   <NavLink
                     to="/teacher"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#eb3434]] underline" : ""
                      }
                     >
                      Trainer
                   </NavLink>
                </li>
                <li>
                   <NavLink
                     to="/class"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#eb3434] underline" : ""
                      }
                     >
                      Classes
                   </NavLink>
                </li>
             
                <li>
                   <NavLink
                     to="/review"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#eb3434] underline" : ""
                      }
                     >
                      Reviews
                   </NavLink>
                </li>
                
                <li>
                   <NavLink
                     to="/community"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#eb3434] underline" : ""
                      }
                     >
                      About Us
                   </NavLink>
                </li>
                <li>
                   <NavLink
                     to="/contacts"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#eb3434] underline" : ""
                      }
                     >
                      Contact
                   </NavLink>
                </li>

                {
                  user ?
                  
                  <li>
                   <div className="flex">
                  <button onClick={singOUT} className=" btn btn-primary">Sing out</button>
                  <span className="text-black"> {user.email} </span>
                  </div>
                

                  </li>
                  

                  
                  :
                  <li>
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#eb3434] underline" : ""
                     }
                    >
                     My Account
                  </NavLink>
               </li>
                

                }

                
              
            </ul>
        </nav>
    </div>
        </div>
    )
}

export default Navbar;
