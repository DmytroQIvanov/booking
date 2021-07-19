import { AdComponent } from "../../Components/AdComponent/AdComponent"
import './AdsPage.sass'

const AdsPage = () => {
    const data = [
        {
            title: "Киев, Большая Васильковская 28", location: "Метро: Васильковская ",
            imgURL: 'https://klike.net/uploads/posts/2020-03/1583054460_1.jpg',
            adActive: false,
            contacts: null,
            statistics: 3000

            
        },
        {
            title: "Киев, Большая Васильковская 28", location: "Метро: Васильковская ",
            imgURL: 'https://klike.net/uploads/posts/2020-03/1583054460_1.jpg',
            adActive: true,
            contacts: "+380979197048",
            statistics: 100
        },]

    return (<section className="ads-page">
        <h1>
            Мои объявления
        </h1>

        <article className="ads-page__ads-container">
            {data.map(elem => <AdComponent data={elem} />)}
        </article>
    </section>)
}


export default AdsPage