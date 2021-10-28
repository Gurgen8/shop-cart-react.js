import React, {Component} from 'react';
import Man from '../../data/man.json';
import _ from "lodash";
import queryString from "query-string";
import { Link, withRouter } from "react-router-dom";


class ManFilter extends Component {
    handleClick = (ev) => {
        const queryObj = queryString.parse(window.location.search);
        queryObj.man = ev?.target.id;
        this.props.history.replace(`/shop?${queryString.stringify(queryObj)}`)
    }

    render() {
        return (
          
               
               <div class="category_modal"> 
               <div class="category_container"> 
                 <div class="category_search"> 
                   <form class="category_form">
                      <input class="category_input" type="text" placeholder="Поиск"/>
                      <i class="fa fa-search"></i> 
                    </form>
                 </div>
               </div>
               <div class="category_container"> 
               {Man.map((c) =>
                    <div onClick={this.handleClick} key={c.id} onClick={this.handleClick} class="category_check"> 
                       
                       <input name="man" class="allcategory_checkbox" id={c.man} type="radio" placeholder="Поиск"/>  <label  for={c.man}>  {_.upperFirst(c.man)}</label>
                     
                    </div>
                       
                    )}
                   </div>
                   <div class="category_container">
                   <div class="footer_btn">  
                     <button class="go"> Применить</button>
                     <button class="back"> <Link to="/shop">Сбросить</Link></button>
                   </div>
                  
               </div>
                  
               </div>
                        

        );
    }
}

export default withRouter(ManFilter);