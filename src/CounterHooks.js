import React, {useContext, useState} from "react";
import { ThemeContext } from "./App";

export default function CounterHooks({ initCnt }){
    const [count, setCnt] = useState(initCnt)
    const theme = useContext(ThemeContext)
    return (
        <>
            <button style = {theme} onClick = {() => setCnt(prevCnt => prevCnt - 1) }>-</button>
            <span>{count}</span>
            <button style = {theme} onClick = {() => setCnt(prevCnt => prevCnt + 1) }>+</button>
        </>
    )
}