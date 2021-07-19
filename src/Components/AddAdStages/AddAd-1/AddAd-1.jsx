import { useEffect } from "react"
import { useState,useSelector } from "react"
import { useDispatch } from "react-redux"
import { firstStep } from "../../../Store/stages/stagesSlice"
import "../AddAdStyle.sass"

const AddAd1 = ({ currentPage, setCurrentPage, setCurrentTitle }) => {

    const [City,setCity] = useState('')
    const [Address,setAddress] = useState('')
    const [Metro,setMetro] = useState('')
    
    const [cities,setCities] = useState([])
    const dispatch = useDispatch()
    setCurrentTitle("Шаг " + currentPage)

    useEffect(()=>{
        fetch('https://api.hh.ru/areas/5').then(result=>result.json()).then(elem=>{
            setCities(elem.areas)
        })
    },[])
    const [areaIsSelected,setAreaIsSelected] = useState(false)
    const [cityVisible,setCityVisible] = useState(false)
    return (<div className="add-ad"
    >
        <h2>Добавить объявление</h2>
        <div className="add-ad__input-container">
            <article className="add-ad__input-block"
            >
                <input placeholder={"Город"} className="add-ad__input" 
                readOnly value={City} 
                onClick={()=>{setCityVisible(true)}}
                onBlur={()=>{setCityVisible(false)}}
            
                />
                {cityVisible&&
                <div className="add-ad__input-modal-panel">
                    {areaIsSelected
                    ?<b>Выберите город: </b>
                    :<b>Выберите область: </b>}
                    {cities.map(elem=><div  onClick={()=>{
                        if(elem.areas.length!=0){
                        setCities(elem.areas)
                        setAreaIsSelected(true)
                        setCityVisible(true)
                    }else{
                        setCity(elem.name)
                        // setCityVisible(false)

                    }
                        }}>{elem.name}</div>)}
            </div>
        }
            </article>
        <article className="add-ad__input-block">

            <input placeholder={"Адрес"} className="add-ad__input" />
            </article>
            <article className="add-ad__input-block">

            <input placeholder={"Метро"} className="add-ad__input" readOnly/>
            </article>

        </div>
        <button onClick={() => {
            dispatch(firstStep({City,Address,Metro}))

            setCurrentPage(currentPage + 1);
        }}>Продолжить</button>

    </div>)
}

export default AddAd1