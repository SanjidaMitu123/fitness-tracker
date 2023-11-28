import { Helmet } from "react-helmet-async";
import Sectiontitle from "../shared/Sectiontitle";


function Community() {
    return (
        <div>

<Helmet>
        <title>Fitness Tracker |About us</title>
        
      </Helmet>

<div>        
                 <Sectiontitle heading={'About us'}></Sectiontitle>
            
            </div>
            <div className="flex justify-center items-center">
            <div>
            <img data-aos="flip-down"  className="h-[350px] w-[600px] ml-[20px] mt-[50px] mb-[50px] " src="https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=2048x2048&w=is&k=20&c=9Ne4TeztjZq2EEeN1mOyiMxmJwiJgpzrlumR8T-OplA="></img>
            </div>
            <div>
            <h1 data-aos="flip-up" className="text-4xl text-center font-medium ">Fitness Tracker Ltd</h1>
                
                <p className="w-[500px] p-6">Yes! If you are looking for a free calorie counter app, you are in the right place. Simply sign up for your free account here and start tracking your food.

The MyFitnessPal app does a lot more than track calories in foods. You can also track macros, vitamins, and other micronutrients and see how everything you eat supports your goals.

Want to level up your goals? Upgrade to Premium! Unlock  best tools (like Barcode Scan, Intermittent Fasting, and Custom Macro Goals).

If you have  never upgraded to MyFitnessPal Premium or never started a Premium trial before, you are eligible for a 1-month free trial. Start your free trial now.</p>
            </div>
            </div>
            
        </div>
    )
}

export default Community;
