import React, { Component } from 'react'
import Wrapper from "../components/Wrapper.jsx";
import  _ from "lodash";
import queryString from "query-string";
import { Link } from "react-router-dom";
import ProductItem from "../components/shop/ProductItem.jsx"
import PRODUCTS from "../data/products.json"
import Effect1 from "../assets/images/bn1.png"
import Effect2 from "../assets/images/bn2.png"
import Banner from "../assets/images/banner.png"
import FruitFilter from '../components/filters/Fruit.jsx';
import ColorFilter from "../components/filters/Color.jsx"
import ManFilter from "../components/filters/Man.jsx"
import ActualFilter from "../components/filters/Aktual.jsx"
import BrandFilter from "../components/filters/Brands.jsx"
import ConcentrationFilter from "../components/filters/Concetration.jsx"
import AllProduct from '../components/shop/AllProduct.jsx';
import ProductAll from "../data/productall.json";
import NewFilter from "../components/filters/New.jsx";
import FildFilter from '../components/filters/Fild.jsx'

class Shop extends Component {
  constructor(props){
    super(props);
    this.state={
      allProduct:false,
      little:"Меньше товаров",
      openModal:false
    }
  }


handelProduct =(ev)=>{
  ev.preventDefault()
 setTimeout( () => {
   const{allProduct}=this.state
   this.setState( {
     allProduct:!allProduct
   });
 }, 300);
 
 
}


    render() {

      const{allProduct,little,openModal}=this.state

      const { location } = this.props;
      const queryObj = queryString.parse(location.search);
      let products = _.clone(PRODUCTS);
      let allItems = _.clone(ProductAll);

      //product
     
      if (queryObj.fruit) {
        products = products.filter(p => p.fruit?.includes(queryObj.fruit));
      }
     
      if (queryObj.col) {
        products = products.filter(p => p.color?.includes(queryObj.col));
      }
     
      
      if (queryObj.man) {
        products = products.filter(p => p.man?.includes(queryObj.man));
      }
      if (queryObj.brandName) {
        products = products.filter(p => p.brandName?.includes(queryObj.brandName));
      }
     
      if (queryObj.mix) {
        products = products.filter(p => p.mix?.includes(queryObj.mix));
      }


      //productall

      if (queryObj.actual) {
        allItems = allItems.filter(p => p.actual?.includes(queryObj.actual));
      }

      if (queryObj.new) {
        allItems = allItems.filter(p => p.new?.includes(queryObj.new));
      }


      if (queryObj.filds) {
        allItems = allItems.filter(p => p.filds?.includes(queryObj.filds));
      }

     
     

      if (queryObj.search) {
               products = products.filter(p => _.toLower(p.name)?.includes(_.toLower(queryObj.search))) ;
               allItems = allItems.filter(p => _.toLower(p.name)?.includes(_.toLower(queryObj.search))) ;
         
       
      }



        return (
            <>       
            <Wrapper>    
            <main class="main">
                <div class="container">
                  <div class="title_main">
                    <h1 class="title_main_product">Арабские духи </h1>
                  </div>
                </div>
                <div class="container">
                  <section class="filters"> 
                     <div class="title_filters_all">
                        <h3 class="title_filters"> Фильтры </h3>
                        <Link class="filter_link" to="/shop">x  </Link>
                     </div>
                     <div class="filters_btn">
                         <form onSubmit={ev=> ev.preventDefault()}  class="category_form">
                         <button  class="categories_btn" > Ноты</button>
                         </form>
                       <FruitFilter />
                         
                     </div>
                     <div class="filters_btn">
                         <form onSubmit={(ev)=>{ev.preventDefault()}}  class="category_form">
                         <button onClick={()=>{  this.setState({openModal:!openModal})}} class="categories_btn" >Пол</button>
                         </form>
                         <ManFilter/>
                     </div>
                     <div class="filters_btn">
                         <form onSubmit={(ev)=>{ev.preventDefault()}}  class="category_form">
                         <button class="categories_btn" > Группа</button>
                         </form>
                         <ColorFilter />
                     </div>
                     <div class="filters_btn">
                         <form onSubmit={(ev)=>{ev.preventDefault()}}  class="category_form">
                         <button class="categories_btn" > Концентрация</button>
                         </form>
                         
                       <ConcentrationFilter/>
                     </div>
                     <div class="filters_btn">
                         <form onSubmit={(ev)=>{ev.preventDefault()}}  class="category_form">
                         <button class="categories_btn" > Бренд </button>
                         </form>
                         <BrandFilter />
                     </div>
                  </section>
                 
                </div>
               
               <div class="container">
                <section class="products">
                  
                {products?.map(product => (
                    
                      <ProductItem product={product} />
                    
                  ))}
                  </section>
                  </div>
              
               
                 <section class="get_products">
                    <form class="get_form">
                        <button value="btn" onClick={this.handelProduct} class="get_product_btn"> {allProduct?little:`Больше товаров`} <i style={{transform:allProduct?"rotate(180deg)":null,transition:"all 1s" }} class="fa fa-chevron-down"></i></button>
                    </form>
                </section>
               
                {allProduct ?<> 
                <div class="container">
                  <div class="title_main">
                    < h1 class="title_main_product">Косметика</h1>
                     <ul class="filter_ul"> 
                       <li class="filter_li"> <a class="filter_link" href="#"> Вид косметики:   </a> Скраб x </li>
                       <li class="filter_li"> <a class="filter_link" href="#"> Бренд:   </a> Dabur x  Malak Bio x </li>
                       <li class="filter_li"> <Link class="filter_link" to="/shop">x  Сбросить фильтры</Link> </li>
                     </ul>
                  </div>
                </div>
                 <div class="container">
                  <section class="filters"> 
                     <div class="title_filters_all">
                        <h3 class="title_filters"> Фильтры </h3>
                        <Link class="filter_link" to="/shop">x  </Link>
                     </div>
                     <div class="filters_btn">
                         <form onSubmit={(ev)=>{ev.preventDefault()}} >
                         <button class="categories_btn" > Вид косметики: 1</button>
                         </form>
                         <FildFilter />
                     </div>
                     <div class="filters_btn">
                         <form onSubmit={(ev)=>{ev.preventDefault()}} >
                         <button class="categories_btn" >Для чего</button>
                         </form>
                        <ActualFilter/>
                     </div>
                     
                     <div class="filters_btn">
                         <form onSubmit={(ev)=>{ev.preventDefault()}} >
                         <button class="categories_btn" > Бренд 2 </button>
                         </form>
                         <NewFilter />
                     </div>
                  </section>
                    </div>
                    <div class="container">
                       <section class="products">                
                       {allItems ?.map(product => (                    
                    <AllProduct product={product}/> 
                     ))}
                
                    </section>
                    </div>
                      <section class="get_products">
                    <form class="get_form">
                        <button onClick={this.handelProduct} class="get_product_btn"> {allProduct?little:`Больше товаров`} <i style={{transform:allProduct?"rotate(180deg)":null,transition:"all 1s" }} class="fa fa-chevron-down"></i></button>
                    </form>
                </section>
                 </> :""}
                <section class="main_banner">
                  <div class="container">
                    <div class="board">
                      <div class="banner_content"> 
                      <img class="main_bann" src={Banner} alt="fon" />
                       <img class="main_ef1" src={Effect1} alt="boarder" />
                       <img class="main_ef2" src={Effect2} alt="boarder" />
                       <h1 class="title_main_banner">Подпишитесь на E-mail рассылку <span class="strong"> со скидками</span> от <span class="strong">20%</span> и получите подарок уже в первом заказе </h1>
                       <form class="banner_main_form">
                         <p class="text_mail"> Ваш E-mail</p>
                         <input class="main_banner_inp" type="email" placeholder="Введите E-mail"/><br/>
                         <button class="go_email">Подписаться </button>
                         <button id="back" class="go_email">Подписаться </button>
                         <button id="back" class="go_email">Подписаться </button>
                       </form>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
             
              </Wrapper>
            </>
        )
    }
}

export default  Shop