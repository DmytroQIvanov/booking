import './Header.sass'
import logo from './assets/Logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = ({options}) => {
    const bool = false
    return (<header className="header">
        <div className="header__container">
            <img src={logo} className="header__logo" />
            <main className="header__main-content">
                {bool ?
                    <>Всё ок</> :
                    <>

                        {/* <Link to="/add-ad" >
                            <button className="header__regular-button header__regular-button_active">
                                Добавить объявление
                            </button>
                        </Link> */}
                        <a href="/add-ad" className="header__regular-button">Добавить объявление</a>
                        <a href="/main" className="header__regular-button">Помощь</a>
                        <a href="/" className="header__regular-button">Расширенный поиск</a>
                        <a href="" className="header__regular-button">Регистрация</a>
                        <a href="" className="header__log-in-button">Войти</a>
                    </>
                }
            </main>

            <main className="header__burger-content">
                <div className="header__burger-btn-container" onClick={()=>options.setBurgerMenu(!options.burgerMenu)}>
                <div className="header__burger-btn" />
                </div>
                
            </main>
        </div>
    </header>)
}

export default Header