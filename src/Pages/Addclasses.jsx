
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { AuthContext } from '../firebase/Authprovider';


function Addclasses() {

    const {user}= useContext(AuthContext);
    const addclasses = event =>{
        event.preventDefault(); 
       
        const form = event.target;
        
        const traineremail = form.traineremail.value;
        const classname = form.classname.value;
        const classhr = form.classhr.value;
        const description = form.description.value;
        const timeinweek = form.timeinweek.value;
        const dayname = form.dayname.value;
        const fee = form.fee.value;
        const img = form.img.value;

        const newclass = { traineremail,classname,classhr,description,timeinweek,dayname,fee,img };
        console.log(newclass);

        fetch('http://localhost:5000/classes',{
          method : 'POST',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(newclass)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'success!',
              text: 'class added successfully',
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

            
            <h1 className="text-center text-3xl font-bold">Add class details</h1>
            <form 
            onSubmit={addclasses}
            >
                {/* row 1 */}
                <div className="flex">

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Trainer Email </span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="traineremail" defaultValue={user?user.email:""} placeholder="Your Email" className="input input-bordered mb-4 mt-0 m-4 w-[450px]" />
                  </label>
                </div>

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Class Name</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="classname" placeholder="Lesson name" className="input input-bordered mb-4 mt-0 m-4 w-[450px]" />
                  </label>
                </div>

                </div>

                 {/* row 2 */}
                 <div className="flex">

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Class Duration</span>
                        </label>
                        <label className="input-group">
                        <input type="number" name="classhr" placeholder="class hr" className="input input-bordered mb-4 mt-0 m-4 w-[450px]" />
                        </label>
                        </div>

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Learning Outcome</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="description" placeholder="Description" className="input input-bordered mb-4 mt-0 m-4 w-[450px]" />
                        </label>
                        </div>

                        </div>

                    {/* row 3 */}
                    <div className="flex">

                    <div className="form-control w-1/2">
                    <label className="label m-4 mb-0">
                    <span className="label-text text-xl font-bold">How many days in a week</span>
                    </label>
                    <label className="input-group">
                    <input type="number" name="timeinweek" placeholder="how many days in a week you are available" className="input input-bordered mb-4 mt-0 m-4 w-[450px]" />
                    </label>
                    </div>

                    <div className="form-control w-1/2">
                    <label className="label m-4 mb-0">
                    <span className="label-text text-xl font-bold">Available days are:</span>
                    </label>
                    <label className="input-group">
                    <input type="text" name="dayname" placeholder="sat,sun,mon,tues,wed,thurs,fri" className="input input-bordered mb-4 mt-0 m-4 w-[450px]" />
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

                      <input type="submit" value="Add class" className="  btn btn-block " />

                      <Link to={'/teacher'}>
      <div className="p-2 pt-2">
        <a className=' font-bold text-xl border-double border-2 border-white'
          
        >
           See All classes
        </a>
      </div>
      </Link>

            </form>
            
    
        </div>
       
        </div>
        </div>
    )
}

export default Addclasses;
