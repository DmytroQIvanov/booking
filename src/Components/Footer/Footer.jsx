import './Footer.sass'
import logo from './assets/Logo.svg'
const Footer = () => {
    return (
        <footer className='footer'>
            <header />
            <div className="footer__background-container">
                <main>
                    <div className="footer__column">
                        <h3>О Компании</h3>
                        <div>Планируется деловая поездка или беззаботный туристический визит в столицу? Теперь для вас не проблема, где остановится в мегаполисе, не переживая о своем персональном комфорте. Доска объявлений cdaem.ru поможет сэкономить на проживании в отдельной уютной квартире, не переплачивая за навязчивый сервис дорогих гостиниц. </div>
                    </div>
                    <div className="footer__column">
                        <h3>Контакты</h3>
                        <div>
                            <div>Агентство в Киеве</div>
                            <div>support@cdaem.ru</div>
                            <div>Тех.Поддержка</div>
                            <div>+380979197048</div>
                        </div>
                    </div>
                    <div className="footer__column">
                        <h3>Навигация</h3>
                        <div>Помощь</div>
                        <div>Права</div>
                        <div>Правообладатели</div>
                        <div>Квартира на час</div>
                        <div>Квартира на сутки</div>
                        <div>Квартира на ночь</div>
                        <div>Сдаём.ком</div>
                        <div>Работа</div>
                        <div>Статьи</div>
                    </div>
                </main>
            </div>
            <footer className="footer__footer">
                <div className="footer__footer-container">
                    <img src={logo} />
                    <div className="">
                        <b>@ 2021 cdaem.com</b>
                        <div >Все права защищены</div>
                    </div>
                </div>
            </footer>

        </footer>)
}

export default Footer