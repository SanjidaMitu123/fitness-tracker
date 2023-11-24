import { NavLink } from "react-router-dom";
import Logo from "./Logo";


function Navbar() {
    return (
        <div>
            <div >
        <nav data-aos="fade-down" className="lg:flex sm:grid sm:grid-cols-3 lg:ml-[240px] text-center items-center relative ">
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
                     to="/services"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#eb3434]] underline" : ""
                      }
                     >
                      Trainer
                   </NavLink>
                </li>
                <li>
                   <NavLink
                     to="/works"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#eb3434] underline" : ""
                      }
                     >
                      Classes
                   </NavLink>
                </li>
             
                <li>
                   <NavLink
                     to="/reviews"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#eb3434] underline" : ""
                      }
                     >
                      Reviews
                   </NavLink>
                </li>
                <li>
                   <NavLink
                     to="/blogs"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#eb3434] underline" : ""
                      }
                     >
                      Blogs
                   </NavLink>
                </li>
                <li>
                   <NavLink
                     to="/contacts"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#eb3434] underline" : ""
                      }
                     >
                      Community
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

                
              
            </ul>
        </nav>
    </div>
        </div>
    )
}

export default Navbar;
