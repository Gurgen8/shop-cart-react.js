import React, {Component} from 'react';
import New from '../../data/new.json';
import _ from "lodash";
import queryString from "query-string";
import { Link, withRouter } from "react-router-dom";


class NewFilter extends Component {
    handleClick = (ev) => {
        const queryObj = queryString.parse(window.location.search);
        queryObj.new = ev?.target.id;
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
            {New.map((c) =>
                 <div onClick={this.handleClick} key={c.id}  class="category_check"> 
           
                    <input required name="new"  class="allcategory_checkbox" id={c.new} value={c.new} type="radio" placeholder="Поиск"/>  <label  for={c.new}>  {_.upperFirst(c.new)}</label>

                 </div>
                    
                 )}
                </div>
                <div class="category_container">
                <div class="footer_btn">  
                  <button class="go">  Применить</button>
                  <button class="back"> <Link to="/shop">Сбросить</Link></button>
                </div>
               
            </div>
                
            </div>
        );
    }
}

export default withRouter(NewFilter);