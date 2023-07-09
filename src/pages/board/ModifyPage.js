import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ModifyComponent from "../../component/board/ModifyComponent";

const ModifyPage = () => {

    const {moveRead} = useQueryObj()

    const { bno } = useParams()

    return ( 
        <div>
            <div>Modify Page</div>

            <ModifyComponent bno={bno}></ModifyComponent>
        </div>
     );
}
 
export default ModifyPage;