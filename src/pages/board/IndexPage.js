import { Outlet } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";

const IndexPage = () => {
    return ( 
        <BasicLayout>
            <div>
                Board Index Page
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </BasicLayout>
     );
}
 
export default IndexPage;