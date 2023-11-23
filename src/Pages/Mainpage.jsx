import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";


function Mainpage() {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Mainpage;
