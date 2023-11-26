
import { useContext } from 'react';

import Swal from 'sweetalert2'
import { AuthContext } from '../firebase/Authprovider';
import { Link } from 'react-router-dom';

function Addteacher() {


    const {user}= useContext(AuthContext);
    const addteacher = event =>{
        event.preventDefault(); 
       
        const form = event.target;
        
        const email = form.email.value;
        const name = form.name.value;
        const age = form.age.value;
        const skill = form.skill.value;
        const timeinweek = form.timeinweek.value;
        const timeinday = form.timeinday.value;
        const fee = form.fee.value;
        const img = form.img.value;

        const newteacher = { email,name,age,skill,timeinweek,timeinday,fee,img };
        console.log(newteacher);

        fetch('http://localhost:5000/teacher',{
          method : 'POST',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(newteacher)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'success!',
              text: 'You applied successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })


     }

    return (
        <div>
             <div>
             <div className="bg-[#eb3434] m-16 p-20">

            
            <h1 className="text-center text-3xl font-bold">Add your details</h1>
            <form 
            onSubmit={addteacher}
            >
                {/* row 1 */}
                <div className="flex">

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Email </span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="email" defaultValue={user?user.email:""} placeholder="Your Email" className="input input-bordered mb-4 mt-0 m-4 w-[450px]" />
                  </label>
                </div>

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Full Name</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="name" placeholder="Your Full name" className="input input-bordered mb-4 mt-0 m-4 w-[450px]" />
                  </label>
                </div>

                </div>

                 {/* row 2 */}
                 <div className="flex">

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Age</span>
                        </label>
                        <label className="input-group">
                        <input type="number" name="age" placeholder="Your Age" className="input input-bordered mb-4 mt-0 m-4 w-[450px]" />
                        </label>
                        </div>

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Skills</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="skill" placeholder="skills" className="input input-bordered mb-4 mt-0 m-4 w-[450px]" />
                        </label>
                        </div>

                        </div>

                    {/* row 3 */}
                    <div className="flex">

                    <div className="form-control w-1/2">
                    <label className="label m-4 mb-0">
                    <span className="label-text text-xl font-bold">Available Time in a week</span>
                    </label>
                    <label className="input-group">
                    <input type="number" name="timeinweek" placeholder="how many days in a week you are available" className="input input-bordered mb-4 mt-0 m-4 w-[450px]" />
                    </label>
                    </div>

                    <div className="form-control w-1/2">
                    <label className="label m-4 mb-0">
                    <span className="label-text text-xl font-bold">Available time in a day</span>
                    </label>
                    <label className="input-group">
                    <input type="number" name="timeinday" placeholder="Available hr in a day" className="input input-bordered mb-4 mt-0 m-4 w-[450px]" />
                    </label>
                    </div>

                    </div>
                                            {/* row 4 */}
                                            <div className="flex">

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Fees</span>
                        </label>
                        <label className="input-group">
                        <input type="number" name="fee" placeholder="fee for a hr" className="input input-bordered mb-4 mt-0 m-4 w-[450px]" />
                        </label>
                        </div>

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Image URL</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="img" placeholder="Image URL" className="input input-bordered  ml-4 mb-4 mt-0 m-4 w-[450px]" />
                        </label>
                        </div>

                        </div>

                  {/* row 5 */}
                                            {/* <details className="dropdown">
                            <summary className="m-1 btn">category</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                            </details> */}

                      <input type="submit" value="Apply " className="  btn btn-block " />

                      <Link to={'/teacher'}>
      <div className="p-2 pt-2">
        <a className=' font-bold text-xl border-double border-2 border-white'
          
        >
           See All trainer 
        </a>
      </div>
      </Link>

            </form>
            
    
        </div>
       
        </div>
        </div>
    )
}

export default Addteacher;
