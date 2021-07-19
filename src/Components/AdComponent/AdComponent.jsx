import './AdComponent.sass'
import Bath from './assets/Bath.svg'
import Bridge from './assets/Bringe.svg'
import HairDryer from './assets/Hair dryer.svg'
import M from './assets/M.svg'

export const AdComponent = ({ data }) => {

    const { title, location, statistics, imgURL, adActive, contacts } = data;
    return (<article className="ad-component">

        <main className='ad-component__main'>
            <img src={imgURL} />
            <section className="ad-component__section">
                {adActive ?
                    <div className="ad-component__active">Активно</div>
                    : <div className="ad-component__not-active">Неактивно</div>}
                <h3>{title} <a href="">Отзывов: 2</a></h3>

                <div className="ad-component__location">
                    {location} <a href="">Показать на карте</a>
                </div>
                <div>Контакты: {contacts ? contacts : <>Нету</>}</div>
                <div className="ad-component__control-panel">
                    <a>Посмотреть</a> | <a>Удалить</a>
                </div>
            </section>
            <aside className="ad-component__aside">
                <div>Сутки в топе: 1 <span className="ad-component__top-price">1000</span></div>
                <div>Ночь: 2 в топе <span className="ad-component__top-price">1000</span></div>
                <div>Час: 1 в топе <span className="ad-component__top-price">1000</span></div>
                <div>Месяц: 1 в топе <span className="ad-component__top-price">1000</span></div>
                <summary className="ad-component__statistics">
                    {statistics} <a href="">Статистика</a>
                </summary>
            </aside>
        </main>
        <footer>
            <div>
                <img src={Bath} />
                <img src={Bridge} />
                <img src={HairDryer} />

            </div>
        </footer>
        <nav className="ad-component__footer-control-panel">
            <button className="ad-component__control-button ad-component__control-button_active">Попасть в слайдер</button>
            <button className="ad-component__control-button">Реклама в разделе</button>
            <button className="ad-component__control-button">Выделить цветом</button>
            <button className="ad-component__control-button">Поднять позицию</button>
            <button className="ad-component__control-button">Поднять в топ</button>
            <div className="ad-component__edit">
                Редактировать
            </div>
        </nav>

    </article>)
}