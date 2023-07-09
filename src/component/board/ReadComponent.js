import { useEffect, useState } from "react";
import { getOne } from "../../api/boardAPI";
import useQueryObj from "../../hooks/useQueryObj";

const initState = {
    bno:0,
    title:'',
    content:'',
    writer:'',
    regDate:'',
    modDate:''
}

const ReadComponent = ({bno}) => {

    const {moveList, moveMod, delByBno} = useQueryObj()

    console.log("read component---")
    console.log(bno)

    const [board, setBoard] = useState(initState)

    useEffect(() => {
        getOne(bno).then(data => {
            setBoard(data)
        })
    }, [bno])
    console.log(board)

    return ( 
        <div>
            <div>
                글번호 - {board.bno}
            </div>
            <div>
                작성일 - {board.regDate}
            </div>
            <div>
                작성자 - {board.writer}
            </div>
            <div>
                제목 - {board.title}
            </div>
            <div>
                내용 - {board.content}
            </div>

            
            <button
                className="border-2 border-black p-2 m-2"
                onClick={e => moveList()}>List</button>

            <button
                className="border-2 border-green-600 p-2 m-2"
                onClick={e => moveMod(bno)}>Mod</button>

            <button
                className="border-2 border-red-500 p-2 m-2"
                onClick={e => delByBno(bno)}>Del</button>
            
        </div>
     );
}
 
export default ReadComponent;