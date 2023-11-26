import Aos from "aos";
import { useEffect } from "react";
import Sectiontitle from "../shared/Sectiontitle";
import { Helmet } from "react-helmet-async";


const Contact = () => {

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])


    return (
        <div>
           <Helmet>
        <title>Fitness Tracker | Contact</title>
        
      </Helmet>
            <div>
                <Sectiontitle heading={'Contact Us'}></Sectiontitle>
           
            <img data-aos="flip-down"  className="h-[350px] w-[1200px] ml-[20px] mt-[50px]  mb-[50px] " src="https://wpblog.zyro.com/cdn-cgi/image/w=700,q=85/wp-content/uploads/2020/12/dollar-shave-club-2.png"></img>
            </div>
        </div>
    );
};

export default Contact;
