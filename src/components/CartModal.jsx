import React, { Component } from 'react'
import CarCart from "../assets/images/cars2.png"
import ChangeCartQty from "./ChangeCartQty"
import Events from "../helpers/Events.jsx";
import Cart from "../helpers/Cart.jsx"
import  PRODUCTS from "../data/products.json"
import PRODUCTSALL from "../data/productall.json"
import TotalPrice from "./TotalPrice.jsx"


export default class CartModal extends Component {
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
            <div>

                 <div class="cart_window">
                <div class="cart_header"> Ваши товары</div>
               
                {cart.map(item => {
                        const product = PRODUCTS.find(p => p.id === item.id) || PRODUCTSALL.find(p => p.id === item.id);
                       
                        if (!product) {
                          return null;
                        }
                        return (
                            <div class="cart_items">
                            <div class="product_items"> 
                 <article class="cart_article">
                  <figure class="cart_figure">
                    <img style={{width:75}} src={product.images[0]}alt="product" />
                    <figcaption class="cart_figcaption">
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
          
              
              <div class="cart_footer"> 
                <article class="cart_footer">
                  <figure class="cart_footer">
                    <img src={CarCart} alt="product" />
                    <figcaption class="cart_figcaption">
                      <span class="cart_desc_footer"> Бесплатная доставка</span>
                    </figcaption>
                  </figure>
                </article>  
              </div>
            </div>

            </div>
        )
    }
}
