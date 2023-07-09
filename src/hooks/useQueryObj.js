import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import { del, modify } from "../api/boardAPI"

const checkNull = (obj) => {

    const result = {}

    for (const attr in obj) {
        const attrName = attr
        const attrValue = obj[attr]

        if (attrValue && attrValue !== 'null') {
            result[attrName] = attrValue
        }
    }

    return result
}

const useQueryObj = () => {

    const [search, setSearch] = useSearchParams()
    const navigate = useNavigate()

    console.log(search)

    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    const queryObj = checkNull({ page, size, type, keyword })

    const moveList = () => {
        const queryString = createSearchParams(queryObj).toString()

        navigate(`../list?${queryString}`)
    }

    const moveRead = (bno) => {
        console.log("moveRead: " + bno)

        const queryString = createSearchParams(queryObj).toString()

        navigate(`../read/${bno}?${queryString}`)
    }

    const moveReg = () => {
        const queryString = createSearchParams(queryObj).toString()

        navigate(`../register?${queryString}`)
    }

    const moveMod = (bno) => {
        const queryString = createSearchParams(queryObj).toString()

        navigate(`../modify/${bno}?${queryString}`)
    }

    const putModify = (board) => {

        modify(board).then(data => {
            console.log(data + "번 게시글 수정")
            moveRead(board.bno)
        }).catch(data => {
            console.log(data)
        })

    }

    const delByBno = (bno) => {

        del(bno).then(data => {
            console.log(data + "번 게시글 삭제")
            moveList()
        })

    }

    // 배열 리턴이다, 순번이 다르면 작동하지 않음
    // return [queryObj, setSearch, moveRead, moveList]

    return { queryObj, setSearch, moveRead, moveList, moveReg, moveMod, putModify, delByBno }
}

export default useQueryObj