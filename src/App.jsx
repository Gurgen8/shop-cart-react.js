import React from "react"
import {Component} from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Cart from './pages/CartPage.jsx'
import Contact from "./pages/Contact.jsx"
import FAQ from "./pages/FAQ.jsx"
import Shop from "./pages/Shop.jsx";
import SingletPage from "./pages/SinglePage.jsx"

class App extends Component{

  render(){

    return <> 
   <BrowserRouter>
     <Switch>
     <Route   path="/home" component={Home}/>
     <Route   path="/product/:id" component={SingletPage} />
     <Route   path="/product/cart" component={Cart} />
     <Route   path="/FAQ" component={FAQ}/>
     <Route   path="/contact" component={Contact}/>
     <Route   path="/cart" component={Cart}/>
     <Route   path="/shop" component={Shop}/>
     <Route  exact={true}  path="/" component={Shop}/>
       
     </Switch>
   </BrowserRouter>
      
    
    </>
  }

}

export default App
