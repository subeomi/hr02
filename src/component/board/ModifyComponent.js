import { useEffect, useState } from "react";
import { getOne, modify } from "../../api/boardAPI";
import useQueryObj from "../../hooks/useQueryObj";

const initState = {
    bno:0,
    writer: '',
    title: '',
    content: ''
}

const ModifyComponent = ({bno}) => {

    const [board, setBoard] = useState(initState)

    const {moveRead, putModify} = useQueryObj()

    useEffect(() => {
        getOne(bno).then(data => {
            setBoard(data)
        })
    }, [])

    const {title, writer, content} = board

    console.log("modi component---")
    // console.log(bno)

    const onchange = (e) => {
        const { value, name } = e.target;
        setBoard({
            ...board,
            [name]: value
        })
    }



    return (
        <div>
            <div>
                <input 
                className="m-2 border-2 border-black"
                type="text" 
                name="writer" 
                value={writer} 
                onChange={onchange}
                placeholder="작성자 명을 입력하세요."
                />
            </div>
            <div>
                <input 
                className="m-2 border-2 border-black"
                type="text"
                name="title" 
                value={title} 
                onChange={onchange}
                placeholder="제목을 입력하세요."
                 />
            </div>
            <div>
                <textarea
                className="m-2 border-2 border-black" 
                name="content" 
                value={content} 
                onChange={onchange} 
                placeholder="내용을 입력하세요."
                />
            </div>

            <div className="flex">
                <div className="m-2 p-2 border-2 border-blue-500" onClick={() => putModify(board)}>Mod</div>
                <div className="m-2 p-2 border-2 border-black" onClick={() => moveRead(bno)}>Cancel</div>
            </div>
        </div>
    );
}

export default ModifyComponent;