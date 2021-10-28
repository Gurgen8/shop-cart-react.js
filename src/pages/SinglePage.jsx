import React, {Component} from 'react';
import PRODUCTS from "../data/products.json";
import Wrapper from "../components/Wrapper.jsx";
import {Link} from "react-router-dom"
import  PRODUCTSALL from '../data/productall.json'



class ProductPage extends Component {
    constructor(props) {
        super(props);
        const id = window.location.pathname.split('/')[2];
        this.state = {
            product: PRODUCTS.find(p => p.id === +id) || PRODUCTSALL.find(p => p.id === +id)
            
            
        }
    }

    render() {
        const { product} = this.state;
        return (
            <Wrapper>
        
           
                        {product ? (
                            <>
                            <div class="container">
                                <section class="product_single">
                                    <article class="item_article">
                                        <img  style={{width:300}} src={"../"+product.images[0]} class="weiw_product"/>
                                        <figure class="product_figure">
                                            <figcaption class="product_description">
                                              <ul class="singl_ul">
                                                  <li class="singl_li"><b>NAME:</b>{product.name}</li>
                                                  <li class="singl_li"><b>DESCRIPTION:</b>{product.shortDescription}</li>
                                                  <li class="singl_li"><b> OLDPRICE:</b><span style={{textDecoration:"line-through"}}>{product.oldprice?product.oldprice:"SALE"}</span></li>
                                                  <li  class="singl_li"><b>PRICE:</b>{product.price}</li>
                                                  <li class="singl_li"><b>SHIPING-DAY:</b>{product.shipping}</li>
                                                  <li class="singl_li"><b>SIZE:</b>{product.size}</li>
                                                 
                                              </ul>
                                            </figcaption>
                                        </figure>

                                    </article>
                                </section>
                              
                            </div>
                             <div class="shop_buying">
 
                              <button   class="go_buying"  > <Link style={{color:"#fff"}} to="../shop">←  Назад  </Link>  </button> 
                            </div>  
                            </>
                        ) : (
                            <h1>Product not found :(</h1>
                        )}
                       
            </Wrapper>
        );
    }
}

export default ProductPage;