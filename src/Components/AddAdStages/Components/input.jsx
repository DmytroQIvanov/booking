import { useState } from "react"
import '../AddAdStyle.sass'

const AddInput = ({setElem})=>{
    const [state,setState]= useState()
    return<><input className="add-ad__input" onChange={(elem)=>{setState(elem.target.value)}} value={state}/></>
}