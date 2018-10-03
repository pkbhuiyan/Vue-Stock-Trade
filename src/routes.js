import Home from "./components/Home";
import Portfolio from "./components/portfolio/portfolio";
import Stocks from "./components/stocks/stocks";

export const routes = [
    {path:'/', component: Home},
    { path: '/portfolio', component: Portfolio},
    { path: '/stocks', component: Stocks},
    
]
