import { Switch, Route, BrowserRouter as Router, useHistory, Redirect } from "react-router-dom"
import AdsPage from "./Pages/AdsPage/AdsPage"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import AddAdPage from "./Pages/AddAdPage/AddAdPage"
import BurgerModalPanel from "./Components/BurgerModalPanel/BurgerModalPanel"
import { useState } from "react"



export const Rout = () => {

    const history = useHistory()

    const [burgerMenu,setBurgerMenu] = useState(false)


    return (<>
            <BurgerModalPanel options={{burgerMenu,setBurgerMenu}}/>

        <Router history={history}>
            <Header options={{burgerMenu,setBurgerMenu}}/>
            

            <Switch>
                <Route path="/my-ads">
                    <AdsPage />
                </Route>

                <Route path="/add-ad">
                    <AddAdPage />
                </Route>
                <Route path="/main">
                    smth
                </Route>
                <Redirect to="/main" />
            </Switch>
            <Footer />
        </Router>
    </>)
}
