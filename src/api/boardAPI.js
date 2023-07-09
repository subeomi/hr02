import axios from "axios"
import { createSearchParams } from "react-router-dom";


export const getList = async (queryObj) => {

    const queryString = createSearchParams(queryObj).toString();

    const res = await axios.get(`http://localhost:8080/api/board/list?${queryString}`)

    return res.data
}

export const getOne = async (bno) => {

    const res = await axios.get(`http://localhost:8080/api/board/${bno}`)

    return res.data

}

export const regist = async (board) => {

    const res = await axios.post('http://localhost:8080/api/board/regist', board)

    return res.data
}

export const modify = async (board) => {
    const res = await axios.put('http://localhost:8080/api/board/modify', board)

    return res.data
}

export const del = async (bno) => {
    const res = await axios.delete(`http://localhost:8080/api/board/delete/${bno}`)

    return res.data
}