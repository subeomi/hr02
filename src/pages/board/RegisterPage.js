import RegisterComponent from "../../component/board/RegisterComponent";
import useQueryObj from "../../hooks/useQueryObj";

const RegisterPage = () => {

    const {moveList, moveReg, queryObj} = useQueryObj()

    console.log(queryObj)

    return ( 
        <div>
            <div>Register Page</div>

            <RegisterComponent moveList={moveList} moveReg={moveReg}></RegisterComponent>
        </div>
     );
}
 
export default RegisterPage;