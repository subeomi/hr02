import ListComponent from "../../component/board/ListComponent";
import ListSearchComponent from "../../component/board/ListSearchComponent";
import useQueryObj from "../../hooks/useQueryObj";
import BasicLayout from "../../layout/BasicLayout";

const ListPage = () => {

    const {queryObj, setSearch, moveRead, moveReg} = useQueryObj()

    console.log("queryObj --------")
    console.log(queryObj)
  
    const movePage = (num) => {
  
      console.log("NUM ------------" + num)
      queryObj.page = num
      setSearch({...queryObj})
    }

    return ( 
        <div>
            Board List Page
    
            <ListComponent 
            queryObj={queryObj} 
            movePage = {movePage} 
            moveRead = {moveRead}
            moveReg = {moveReg}
            ></ListComponent>
        </div>  
     );
}
 
export default ListPage;