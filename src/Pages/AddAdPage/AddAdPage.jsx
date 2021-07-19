import { useState } from 'react'
import './AddAdPage.sass'
import AddAd1 from '../../Components/AddAdStages/AddAd-1/AddAd-1'
import AddAd2 from '../../Components/AddAdStages/AddAd-2/AddAd-2'

const AddAdPage = () => {
    const d = [1, 2, 3, 4, 5, 6]
    const [currentPage, setCurrentPage] = useState(1)
    const [currentTitle, setCurrentTitle] = useState('Добавить объявление')


    return (
        <div className="add-ad">
            <header>
                <h2>{currentTitle}</h2>
                <div className="add-ad__navigation-panel">
                    {d.map(elem =>
                        <div className={`add-ad__navigation-elem ${currentPage > elem && 'add-ad__navigation-elem_active'} ${currentPage == elem && 'add-ad__navigation-elem_current'}`}>
                            <span>{elem}</span>
                        </div>)}
                </div>
            </header>
            <main>
                {currentPage == 1 && <AddAd1 setCurrentPage={setCurrentPage} currentPage={currentPage} setCurrentTitle={setCurrentTitle} />}
                {currentPage == 2 && <AddAd2 setCurrentPage={setCurrentPage} currentPage={currentPage} setCurrentTitle={setCurrentTitle} />}

            </main>

        </div>
    )
}

export default AddAdPage