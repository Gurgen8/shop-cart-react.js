import React, { Component } from 'react';
import Cart from "../helpers/Cart.jsx";



class ChangeCartQty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props?.qty
    }
  }

 

  changeQty = (qty) => {
    Cart.add(this.props.id, qty);
  }

  setQty = (ev) => {
    if (isFinite(ev.target.value)) {
      if (ev.target.value <= 0) {
        Cart.set(this.props.id, 1);
      } else {
        Cart.set(this.props.id, ev.target.value);
      }
    }
  }

  render() {
    const { qty } = this.state
    return (
      <>      
      
      <li class="count_li"> <span onClick={() => this.changeQty(-1)} class="count_span"> - </span> </li>
      <li class="count_li">  <input class="count_product" type="text" value={this.props.qty} onChange={this.setQty} />  </li>
      <li class="count_li"> <span onClick={() => this.changeQty(1)} class="count_span"> + </span> </li>
                              
             
      </>
    
    )
  }
}

export default ChangeCartQty;
