//modules
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
//images
import Logo from "../assets/images/logo.png";
import Parfum from "../assets/images/parfumery.png";
import Brands from "../assets/images/brands.png";
import Oil from "../assets/images/oil.png";
import Food from "../assets/images/food.png";
import Kosmetics from "../assets/images/kosmetics.png";
import Tr from "../assets/images/tr.png"
import Saleprice from "../assets/images/saleprice.png"
import  BannerBrand from "../assets/images/banner_brand.png"
import Effect1 from "../assets/images/bn1.png"
import Effect2 from "../assets/images/bn2.png"
import BannerBrand2 from "../assets/images/banner2.png"
import BannerBrand3 from "../assets/images/banner3.png"
import BannerBrand4 from "../assets/images/banner4.png"

//json
import CartButton from "./CartButton.jsx"
 import SearchFilter from "./filters/SearchFilter.jsx"




class Headers extends Component {

  constructor(props){
    super(props);
    this.state={
      isOpen:false
    }
  }

  openModal=(ev)=>{
    ev.preventDefault()
    const{isOpen}=this.state
    this.setState({
      isOpen:!isOpen
    })
  }

  surprice=()=>{
    alert(Math.floor(Math.random()))

  }

  render() {
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      
      };
      const{isOpen}=this.state
    return (
      <header class="header">
        <div class="bg_navigation">
          <div class="container">
          <section class="navigation_section">
            <nav class="tel_nav">
              <ul class="tel_ul">
                <li class="tel_li"><a class="tel_link" href="tel:+7 (999) 133-21-83" ><i class="fa fa-phone"></i> +7 (999) 133-21-83 </a> </li>
                <li class="tel_li"><a class="tel_link" href="tel: 8 (800) 222-31-36"> 8 (800) 222-31-36 -  Бесплатно по России </a></li>
              </ul>
            </nav>
            <input type="checkbox" id="nav_check"/> <label class="nav_label" for="nav_check">  <span class="nava_span"> </span> <span class="nava_span"> </span>  <span class="nava_span"> </span>  </label>
             
            <nav class="navigation">
              <ul class="navigation_ul">
                <li class="navigation_li"><Link class="navigation_link" to="contact">Контакты</Link></li>
                <li class="navigation_li"><Link class="navigation_link" to="cart">Доставка</Link></li>
                <li class="navigation_li"><Link class="navigation_link" to="FAQ">FAQ</Link></li>
                <li class="navigation_li"><Link class="navigation_link" to="shop">Блог</Link></li>
              </ul>
            </nav>
            </section>
          </div>
        </div> 
        <section class="logo">
          <div class="container">
            <div class="logo_shop">
              <article class="logo_article">
                <figure class="logo_figure">
                  <img class="logo_img" src ={Logo} alt="logo-shop"/>
                  <figcaption class='description_logo'><h1 class="logo_title">Нилмарт</h1> <p class="logo_desc">Восточный онлайн маркет</p></figcaption>
                </figure>
              </article>
              <div class="search_bar">
              <SearchFilter/>
            
                <CartButton/> 
               
              
            </div>
            </div>
          </div>
        </section>
        <section class="assortments">
         <div class="container">
           <div class="root">
             <nav class="assort_nav">
               <ul class="assort_ul">
                 <li class="assort_li">
                   <img src={Parfum}  alt="parfumery"/>
                   <a href="#">Парфюмерия</a>
                 </li>
                 <li class="assort_li">
                   <img src={Kosmetics}  alt="kosmetics"/>
                   <a href="#">Косметика</a>
                 </li>
                 <li class="assort_li">
                   <img src={Tr}  alt="tr"/>
                   <a href="#">Травы</a>
                 </li>
                 <li class="assort_li">
                   <img src={Oil}  alt="oil"/>
                   <a href="#">Масла</a>
                 </li>
                 <li class="assort_li">
                   <img src={Food}  alt="food"/>
                   <a href="#">Питание</a>
                 </li>
                 <li class="assort_li">
                   <img src={Saleprice}  alt="saleprice"/>
                   <a href="#">Акции</a>
                 </li>
                 <li class="assort_li">
                   <img src={Brands}  alt="brands"/>
                   <a href="#">Бренды</a>
                 </li>
               </ul>
             </nav>
           </div>
         </div>
        </section> 
        <section class="banner">
          <div class="container">
            <Slider {...settings}>
            <div class="banner_div">
              <div class="banner_brand">
                <img src={BannerBrand} alt="banner-brand" />
              </div>
              <div class="banner_effect">
                <img class="effect" src={Effect1} alt="effects"/>
              </div>
              <div class="banner_effect">
                <img class="effect" src={Effect2} alt="effects"/>
              </div>
              <div class="banner_desc">   
                <h1 class="banner_title">Поступление натуральной косметики из Марокко</h1>      
              </div>
              <div class="banner_advertisement">   
                <h6 class="advertisement_title">Получите 5% скидки на косметику из Марокко </h6>      
              </div>
              <div class="advertisement_form">
                <form class="advers_form_inp">
                  <div class="enter_info" >
                    <input placeholder="Введите Имя" class="name" type="text" />
                    <input placeholder="Введите E-mail" class="email"  type="email"/>
                  </div>
                  <div class="check_div">
                  <input class="chek" id="check"  type="checkbox" /> <label class="check_label" for="check">Даю согласие на обработку персональных данных</label>
                  </div>
                  <button onClick={this.surprice} class="btn_form"> <i class="fa fa-percent"></i>Получить скидку</button>
                </form>
                </div>
                
            </div>
            <div class="banner_div">
              <div class="banner_brand">
                <img src={BannerBrand2} alt="banner-brand" />
              </div>
              <div class="banner_effect">
                <img src={Effect1} alt="effects"/>
              </div>
              <div class="banner_effect">
                <img class="effect" src={Effect2} alt="effects"/>
              </div>
              <div class="banner_desc">   
                <h1 class="banner_title">Поступление натуральной косметики из Марокко</h1>      
              </div>
              <div class="banner_advertisement">   
                <h6 class="advertisement_title">Получите 5% скидки на косметику из Марокко </h6>      
              </div>
              <div class="advertisement_form">
                <form class="advers_form_inp">
                  <div class="enter_info" >
                    <input placeholder="Введите Имя" class="name" type="text" />
                    <input placeholder="Введите E-mail" class="email"  type="email"/>
                  </div>
                  <div class="check_div">
                  <input class="chek" id="check"  type="checkbox" /> <label class="check_label" for="check">Даю согласие на обработку персональных данных</label>
                  </div>
                  <button class="btn_form"> <i class="fa fa-percent"></i>Получить скидку</button>
                </form>
                </div>
                
            </div>
            <div class="banner_div">
              <div class="banner_brand">
                <img src={BannerBrand3} alt="banner-brand" />
              </div>
              <div class="banner_effect">
                <img src={Effect1} alt="effects"/>
              </div>
              <div class="banner_effect">
                <img class="effect" src={Effect2} alt="effects"/>
              </div>
              <div class="banner_desc">   
                <h1 class="banner_title">Поступление натуральной косметики из Марокко</h1>      
              </div>
              <div class="banner_advertisement">   
                <h6 class="advertisement_title">Получите 5% скидки на косметику из Марокко </h6>      
              </div>
              <div class="advertisement_form">
                <form class="advers_form_inp">
                  <div class="enter_info" >
                    <input placeholder="Введите Имя" class="name" type="text" />
                    <input placeholder="Введите E-mail" class="email"  type="email"/>
                  </div>
                  <div class="check_div">
                  <input class="chek" id="check"  type="checkbox" /> <label class="check_label" for="check">Даю согласие на обработку персональных данных</label>
                  </div>
                  <button class="btn_form"> <i class="fa fa-percent"></i>Получить скидку</button>
                </form>
                </div>
                 
            </div>
            <div class="banner_div">
              <div class="banner_brand">
                <img src={BannerBrand4} alt="banner-brand" />
              </div>
              <div class="banner_effect">
                <img src={Effect1} alt="effects"/>
              </div>
              <div class="banner_effect">
                <img class="effect" src={Effect2} alt="effects"/>
              </div>
              <div class="banner_desc">   
                <h1 class="banner_title">Поступление натуральной косметики из Марокко</h1>      
              </div>
              <div class="banner_advertisement">   
                <h6 class="advertisement_title">Получите 5% скидки на косметику из Марокко </h6>      
              </div>
              <div class="advertisement_form">
                <form class="advers_form_inp">
                  <div class="enter_info" >
                    <input placeholder="Введите Имя" class="name" type="text" />
                    <input placeholder="Введите E-mail" class="email"  type="email"/>
                  </div>
                  <div class="check_div">
                  <input class="chek" id="check"  type="checkbox" /> <label class="check_label" for="check">Даю согласие на обработку персональных данных</label>
                  </div>
                  <button class="btn_form"> <i class="fa fa-percent"></i>Получить скидку</button>
                </form>
                </div>
                
            </div>
            </Slider>
          </div>
        </section>
      </header>
    );
  }
}

export default Headers;
