import React, { Component } from 'react'
import  _ from "lodash";
import Cart from "../../helpers/Cart.jsx";
import { Link } from "react-router-dom";

export default class ProductItem extends Component {

  
    addToCart = (ev) => {
    ev.preventDefault();
    const { product } = this.props;
    Cart.add(product.id, 1);
  }



    render() {

     const{product}=this.props
      

        return (
            <>           

               <Link  class="link_single" to={`/product/${product.id}`}>
                  <article  class="product_article">
                      <div class="detalis_parfum">
                      <img src={product.images[7]} />
                      <img src={product.images[8]} />
                      <img src={product.images[7]} />
                      <img src={product.images[8]} />
                      <img src={product.images[8]} />
                      <img src={product.images[7]} /> 
                      </div>
                      
                    <figure class="product_figure">
                      <img class={`product_avatar`+product.id} src={product.images[0]} alt={product.shortDescription}/> 
                      {product.salePrice?  <span class="saleoff_price">{product.salePrice}</span> :""}
                      <figcaption class="product_figcaption">{product.price} $ <span class="oldprice">{product.oldprice}</span></figcaption>
                      <ul class="detalis_ul">
                          <li class="detalis_link"><a class="detalis_link" href="#"></a><img src={product.images[1]}/></li>
                          <li class="detalis_link"><a class="detalis_link" href="#"></a><img src={product.images[2]}/></li>
                          <li class="detalis_link"><a class="detalis_link" href="#"></a><img src={product.images[3]}/></li>
                          <li class="detalis_link"><a class="detalis_link" href="#"></a><img src={product.images[4]}/></li>
                      </ul>
                      <p class="product_name">{product.name}</p>
                      <p class="product_description">{product.shortDescription}</p>
                      <div class="star">
                        <span class="star"><img class="star_icon" src={product.images[5]} alt="reiting"/></span>
                        <span class="star"><img class="star_icon" src={product.images[5]} alt="reiting"/></span>
                        <span class="star"><img class="star_icon" src={product.images[5]} alt="reiting"/></span>
                        <span class="star"><img class="star_icon" src={product.images[5]} alt="reiting"/></span>
                        <span class="star"><img class="star_icon" src={product.images[6]} alt="reiting"/></span>
                      </div>
                      <ul class="product_add_shop_ul">
                        <li onClick={this.addToCart}   class="product_add_li"><i class="fa fa-shopping-cart"></i> </li>
                        <li  class="product_add_li"> <i class="fa fa-heart"></i> </li>
                      </ul>
                    </figure>
                  </article>
                 
                  </Link> 
            
            </>
        )
    }
}

