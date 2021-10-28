import React, {Component} from 'react';
import Cart from "../helpers/Cart.jsx";
import PRODUCTS from "../data/products.json";
import PRODUCTSALL from "../data/productall.json"
import Events from "../helpers/Events.jsx";
import {Link} from "react-router-dom"

class TotalPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: '',
            total: 0,
            subTotal: 0
        }
    }

    componentDidMount() {
        this.handleCartChange();
        Events.on('cartChange', this.handleCartChange)
     
  
    }

    componentWillUnmount() {
        Events.remove('cartChange', this.handleCartChange)
        
 
    }

    handleCartChange = () => {
        const cart = Cart.get();
        let products = [], subTotal = [], total = [];
        cart.forEach(el => {
            products.push([PRODUCTS.find (p => p.id === el.id) || PRODUCTSALL.find (p => p.id === el.id), el.qty] );
          
         })
        products.forEach(el => {
                
                total.push((+el[0].salePrice || +el[0].price) * +el[1]);
                subTotal.push(+el[0].price * +el[1]);

        
        })
      
        this.setState({total: this.sum(total), subTotal: this.sum(subTotal)});
    }
    
    

    
    
    
    sum = (arr) => {
        let x = 0;
        arr.forEach(el => {x += el});
        return x.toFixed(2);
    }


    render() {
        const { total, subTotal } = this.state;
        return (
           <div class="cart_items">
           <div class="product_items"> 
             <span class="total"> Итого: <span class="price_total">{total}$ </span> </span>  <button class="cart_button"> <Link class="cart_button_link" to="cart"> Перейти в корзину</Link> </button>
           </div>
           <div class="product_items"> 
             <span class="bals_total"> Баллы: <b> {Math.ceil(subTotal/9989)*22}  </b> 	&#174; </span>
             <span class="bals_total"> Сумма скидок: <b>   {Math.floor((subTotal/100*20))} </b>  </span>
             <span class="bals_total"> Подарков:    <b> {Math.floor(Math.random(total/100)*100)} </b>  </span>
           </div>
         </div> 
       
                
        );
    }
}

export default TotalPrice;