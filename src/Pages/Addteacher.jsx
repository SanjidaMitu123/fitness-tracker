
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../firebase/Authprovider';

function Addteacher() {


    const {user}= useContext(AuthContext);
    const addjob = event =>{
        event.preventDefault(); 
       
        const form = event.target;
        
        const employername = form.employername.value;
        const jobtitle = form.jobtitle.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const minimumprice = form.minimumprice.value;
        const maxprice = form.maxprice.value;
        const category = form.category.value;
        const img = form.img.value;

        const newjob = { employername,jobtitle,deadline,description,minimumprice,maxprice,category,img };
        console.log(newjob);

        fetch('http://localhost:5000/teacher',{
          method : 'POST',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(newjob)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'success!',
              text: 'Job added successfully',
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
            <h1 className="text-center text-3xl font-bold">Add Job details</h1>
            <form 
            onSubmit={addjob}
            >
                {/* row 1 */}
                <div className="flex">

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Email of the teacher</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="employername" defaultValue={user?user.email:""} placeholder="Email of the employer" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                  </label>
                </div>

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Full Name</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="jobtitle" placeholder="Job Title" className="input input-bordered mb-4 mt-0 m-4 w-full" />
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
                        <input type="number" name="age" placeholder="Your Age" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                        </label>
                        </div>

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Skills</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="skill" placeholder="skill" className="input input-bordered mb-4 mt-0 m-4 w-full" />
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
                    <input type="number" name="minimumprice" placeholder="Minimum price" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                    </label>
                    </div>

                    <div className="form-control w-1/2">
                    <label className="label m-4 mb-0">
                    <span className="label-text text-xl font-bold">Available time in a day</span>
                    </label>
                    <label className="input-group">
                    <input type="number" name="maxprice" placeholder="Maximum price" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                    </label>
                    </div>

                    </div>
                                            {/* row 4 */}
                                            <div className="flex">

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">category</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="category" placeholder="category" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                        </label>
                        </div>

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Image URL</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="img" placeholder="Image URL" className="input input-bordered mb-4 mt-0 m-4 w-full" />
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



            </form>
            <Link to='/addcat' > <button className="text-center text-xl font-bold  btn btn-warning m-5">Add jod Category</button> </Link> 
    
        </div>
        </div>
        </div>
    )
}

export default Addteacher;
