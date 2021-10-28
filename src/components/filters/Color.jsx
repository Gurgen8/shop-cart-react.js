import React, {Component} from 'react';
import Color from '../../data/color.json';
import _ from "lodash";
import queryString from "query-string";
import { Link, withRouter } from "react-router-dom";

class ColorFilter extends Component {
    handleClick = (ev) => {
        const queryObj = queryString.parse(window.location.search);
        queryObj.col = ev?.target.id;
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
            {Color.map((c) =>
                 <div onClick={this.handleClick} key={c.id} onClick={this.handleClick} class="category_check"> 
                    <input name="color" class="allcategory_checkbox" id={c.color} type="radio" placeholder="Поиск"/>  <label  for={c.color}>  {_.upperFirst(c.color)}</label>
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

export default withRouter(ColorFilter);