import React from 'react';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/Home';
import PortfolioPage from '../components/Portfolio';
import ContactPage from "../components/Contact";
import ItemPage from '../components/Item';
 
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                <Route path="/contact" component={ContactPage} />
                <Route path="/portfolio/:id" component={ItemPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>        
    </BrowserRouter>
);

export default AppRouter;