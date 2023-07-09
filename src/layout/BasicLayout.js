import { Children } from "react";
import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {

    return ( 
        <div className="bg-indigo-500 h-screen">
            <SampleNav />
            <div className="container mx-auto w-4/5 border-2 bg-white">
                {children}
            </div>
        </div>
     );
}
 
export default BasicLayout;