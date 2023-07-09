import { useState } from "react";
import { regist } from "../../api/boardAPI";

const initState = {
    writer: '',
    title: '',
    content: ''
}

const RegisterComponent = ({moveReg, moveList}) => {

    const [board, setBoard] = useState(initState)

    const { title, writer, content } = board

    const onchange = (e) => {
        const { value, name } = e.target;
        setBoard({
            ...board,
            [name]: value
        })
    }

    const postReg = (board) => {

        regist(board).then(data => {
            console.log(data + "번 게시글 작성")
            moveList()
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
                <div className="m-2 p-2 border-2 border-blue-500" onClick={() => postReg(board)}>Reg</div>
                <div className="m-2 p-2 border-2 border-black" onClick={() => moveList()}>List</div>
            </div>
        </div>
    );
}

export default RegisterComponent;