
import "./AddAd-3.sass"

const AddAd2 = ({ currentPage, setCurrentPage, setCurrentTitle }) => {
    console.log(currentPage)
    setCurrentTitle("Шаг " + currentPage)
    return (<div>
        <h2>Добавить объявление</h2>
        <div>
            <span >Что-то</span>
            <input placeholder={""} className="" readOnly />

            <span >Адрес</span>
            <input placeholder={"Адрес*"} className="" />

            <span >Метро</span>
            <input placeholder={"Метро*"} className="" />
        </div>
        <button onClick={() => {
            setCurrentPage(currentPage + 1);
            console.log(currentPage)
        }}>Продолжить</button>

    </div>)
}

export default AddAd2