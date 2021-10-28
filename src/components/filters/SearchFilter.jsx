import React, {Component} from 'react';
import queryString from "query-string";
import { withRouter } from "react-router-dom";

class SearchFilter extends Component {

    handleSubmit = (ev) => {
        ev.preventDefault()
        const queryObj = queryString.parse(window.location.search);
        queryObj.search = this.search.value ? this.search.value : undefined;
        this.props.history.replace(`/shop?${queryString.stringify(queryObj)}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} class="search_form">
                 <div class="inp_search"><input ref={el => this.search = el}  id="search" placeholder="" tyoe="text" /> <span class="placeholder"> Поиск </span> <i class="fa fa-search"></i> <div class="search_effect"> </div></div>
                 
           </form>
        )
    }
}


export default withRouter(SearchFilter);