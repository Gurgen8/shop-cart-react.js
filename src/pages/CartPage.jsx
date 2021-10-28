import React, { Component } from 'react';
import Wrapper from "../components/Wrapper.jsx";
import Cart from "../helpers/Cart.jsx";
import PRODUCTS from "../data/products.json";
import Events from "../helpers/Events.jsx";
import { Link } from "react-router-dom";
import _ from "lodash"
import TotalPrice from "../components/TotalPrice.jsx"
import ChangeCartQty from "../components/ChangeCartQty.jsx"
import PRODUCTSALL from "../data/productall.json"


class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: Cart.get(),
    
    }
  }


  componentDidMount() {
    Events.on('cartChange', this.handleCartChange)
     
  }

  componentWillUnmount() {
    Events.remove('cartChange', this.handleCartChange)
  }

  handleCartChange = () => {
    this.setState({ cart: Cart.get() })
  }

  deleteProduct = (productId) => {
    Cart.delete(productId)
  }

 
 

  render() {
  
    const { cart } = this.state;
   
    return (
      <Wrapper>
         <div class="container">
            <div class="cart_page_icon">
            <i class="fa fa-cart-arrow-down"></i>
          </div>
        </div>
        <div style={{boxShadow:"10px 10px 13px black"}} class="container">
        {cart.map(item => {
                        const product = PRODUCTS.find(p => p.id === item.id)|| PRODUCTSALL.find(p=>p.id===item.id)
                       
                        if (!product) {
                          return null;
                        }
                        return (
                            <div class="cart_items">
                            <div class="product_items"> 
                 <article style={{margin:0}} class="cart_article">
                  <figure class="cart_figure">
                    <img style={{width:100}} style={{width:75}} src={product.images[0]}alt="product" />
                    <figcaption style={{display:"grid"}} class="cart_figcaption">
                      <span class="cart_desc"> {product.name} </span>
                      <ul class="count_ul">
                      <ChangeCartQty  id={item.id} qty={item.qty} />
                        <li class="count_li"> <span class="count_span"> {product.price * item.qty}$ </span> </li>
                        <li onClick={() => this.deleteProduct(item.id)}  class="count_li"> <span class="count_span"> <i style={{color:"red"}} class="fa fa-trash"></i> </span> </li>
                      </ul>
                    </figcaption>
                  </figure>
                 </article>
                 </div>
              </div>
              
                     )
                    })}
               
                <TotalPrice/>
          </div>
        <div class="container">
         <div class="shop_buying">
            <button onClick={()=>{alert("Your order has been successfully completed")}} class="go_buying" >Заказать сейчас </button> 
            <button   class="go_buying"  > <Link style={{color:"#fff"}} to="/">←  Назад  </Link>  </button> 
          </div>  
       </div>
               
      </Wrapper>
    );
  }
}

export default CartPage;
