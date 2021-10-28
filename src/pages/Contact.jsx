import React, { Component } from 'react'
import Wrapper from "../components/Wrapper.jsx";


 class Contact extends Component {
    render() {
        return (
            <>
            
            <Wrapper> 
              <div class="container">
               <section class="footer_logo">
                 <ul class="footer_ul">
                   <li class="footer_li"><a class="footer_link" href="tel:+7 (999) 133-21-83" ><i class="fa fa-phone"></i> +7 (999) 133-21-83 </a>  </li>
                   <li class="footer_li"><a class="footer_link" href="tel: 8 (800) 222-31-36"> 8 (800) 222-31-36 </a></li>
                  </ul>
                  <nav class="navigation">
                   <ul class="navigation_footer_ul">               
                      <li class="navigation_footer_li"><a class="footer_email" href = "mailto: abc@example.com"><i class="fa fa-envelope"></i>nilmart@gmail.com</a></li>
                      <li class="navigation_footer__li"><a class="footer_adress" href="#"> <i class="fa fa-map-marker"></i>г. Уфа, ул. Кадомцевых, 12/2</a></li>
                      <li id="watch_map" class="navigation_footer_li"><a class="watch" href="#">Посмотреть на карте</a></li> 
                    </ul>
                  </nav>
                </section> 
              </div>
            </Wrapper>
            
            </>
        )
    }
}

export default Contact