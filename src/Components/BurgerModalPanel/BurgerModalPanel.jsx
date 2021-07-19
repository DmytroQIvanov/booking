import './BurgerModalPanel.sass'
const BurgerModalPanel =({options})=>{
    console.log(options)
    return(< >
        {options.burgerMenu&&
        <div className="burger-modal-panel">
                <div className="burger-modal-panel__content">
                     <a href="/add-ad" className="header__regular-button">Добавить объявление</a>
                        <a href="/main" className="header__regular-button">Помощь</a>
                        <a href="/" className="header__regular-button">Расширенный поиск</a>
                        <a href="" className="header__regular-button">Регистрация</a>
                        <a href="" className="header__log-in-button">Войти</a>
                        </div>
                </div>}
    </  >)
}
export default BurgerModalPanel