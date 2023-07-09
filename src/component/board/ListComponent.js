import { useEffect, useState } from "react"
import { getList } from "../../api/boardAPI"
import ListPageComponent from "../common/ListPageComponent"
import ListSearchComponent from "./ListSearchComponent"
import useQueryObj from "../../hooks/useQueryObj"

const initState = {
    dtoList: [],
    end: 0,
    start: 0,
    next: false,
    prev: false,
    pageNums: [],
    page: 0,
    size: 0,
    requestDTO: null
}

const ListComponent = ({queryObj, movePage, moveRead, moveReg}) => {

    const [listData, setListData] = useState(initState)
    const {setSearch} = useQueryObj()

    // page=1&size=10&type=null&keyword=null
    // console.log(createSearchParams(queryObj).toString())

    useEffect(() => {

        getList(queryObj).then(data => {
            console.log(data)
            setListData(data)
        })

    }, [queryObj])

    const moveSearch = (type, keyword) => {
        queryObj.page = 1
        queryObj.type = type
        queryObj.keyword = keyword
    
        setSearch({...queryObj})
      }

    return ( 
        <div>
            <div>List Component</div>
            <div>
                <ul>
                    {listData.dtoList.map(dto =>
                        <li
                        key={dto.bno}
                        onClick={() => moveRead(dto.bno)}
                        >
                            {dto.bno} - {dto.title} - [{dto.replyCount}]
                        </li>
                    )}
                </ul>
            </div>
            <div>
                <button className="border-2 border-black p-2" onClick={() => moveReg()}>Reg</button>
            </div>
            <ListSearchComponent moveSearch={moveSearch} queryObj={queryObj }></ListSearchComponent>
            <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
        </div>
     );
}
 
export default ListComponent;