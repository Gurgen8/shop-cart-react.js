//modules
import React, { Component } from 'react';
import {Link} from "react-router-dom"

//images
import Logo from "../assets/images/footer_logo.png";

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
       <div class="container">
         <div class="footer_root">
           <section class="footer_logo">
              <article class="logo_article">
                <figure class="logo_figure">
                    <img class="logo_img" src ={Logo} alt="logo-shop"/>
                    <figcaption class='description_logo'><h1 class="logo_title">Нилмарт</h1> <p class="logo_desc">Восточный онлайн маркет</p></figcaption>
                 </figure>
                </article>
                <nav class="navigation">
                <ul class="navigation_ul">
                  <li class="navigation_li"><Link class="navigation_link" to="contact">Контакты</Link></li>
                  <li class="navigation_li"><Link class="navigation_link" to="cart">Доставка</Link></li>
                  <li class="navigation_li"><Link class="navigation_link" to="FAQ">FAQ</Link></li>
                  <li class="navigation_li"><Link class="navigation_link" to="Блог">Блог</Link></li>
                </ul>
              </nav>
           </section>
           <section class="footer_logo">
               <ul class="footer_ul">
                 <li class="footer_li"><a class="footer_link" href="tel:+7 (999) 133-21-83" ><i class="fa fa-phone"></i> +7 (999) 133-21-83 </a>  <a class="soc_links" href="https://watsapp.com"> <i class="fa fa-whatsapp"></i></a> <a class="soc_links" href="https://viber.com"> <i class="fa fa-youtube"></i></a> <a class="soc_links" href="https://telegram.com"> <i class="fa fa-telegram"></i></a> </li>
                 <li class="footer_li"><a class="footer_link" href="tel: 8 (800) 222-31-36"> 8 (800) 222-31-36 </a></li>
                </ul>
                <nav class="navigation">
                <ul class="navigation_footer_ul">
                  
                  <li class="navigation_footer_li"><a class="footer_email" href = "mailto: abc@example.com"><i class="fa fa-envelope"></i>nilmart@gmail.com</a></li>
                  <li class="navigation_footer__li"><a class="footer_adress" href="#"> <i class="fa fa-map-marker"></i>г. Уфа, ул. Кадомцевых, 12/2</a></li>
                  <li id="watch_map" class="navigation_footer_li"><a class="watch" href="https://www.google.com/maps/@38.95682,30.6919921,6z">Посмотреть на карте</a></li>
                  
                </ul>
              </nav>
           </section>
           <section class="footer_logo">
               <h5 class="saleoff"> Акции и скидки для пользователей наших социальных сетей</h5>
                <nav class="navigation">
                <ul id="navigation_ul_soc" class="navigation_ul">
                  <li class="soc_li"><a class="soc_link" href="http://wk.com"> <i class="fa fa-wikipedia-w"></i> </a></li>
                  <li class="soc_li"> <a class="soc_link" href="http://instagram.com"> <i class="fa fa-instagram"></i> </a></li>
                  <li class="soc_li"><a class="soc_link" href="http://facebook.com"> <i class="fa fa-facebook-square"></i> </a></li>
                  <li class="soc_li"><a class="soc_link" href="http://ok.com"> <i class="fa fa-odnoklassniki-square"></i></a></li>
                </ul>
              </nav>
           </section>
           
         </div>
         <div class="footer_end_links">
           <div class="license"><h6 class="license_title">Нилмарт 2012 Все права защищены</h6></div>
           <div class="license_footer_link"><a href="#" class="license_link">Политика конфиденциальности</a></div>
           <div class="license"><h6 class="license_title">Работаем круглосуточноы</h6></div>
           </div>
           
       </div>
        
   
      </footer>
    );
  }
}

export default Footer;
