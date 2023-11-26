import Slider from "../shared/Slider";
import Community from "./Community";
import Contact from "./Contact";
import Feature from "./Feature";
import Reviews from "./Reviews";
import { Helmet } from 'react-helmet-async';
import Trainer from "./Trainer";


function Home() {
    return (
        <div>
            <Helmet>
        <title>Fitness Tracker | Home</title>
        
      </Helmet>
            <Slider></Slider>
            <Feature></Feature>
            <Reviews></Reviews>
            <Community></Community>
            <Trainer></Trainer>
            <Contact></Contact>
        </div>
    )
}

export default Home;
