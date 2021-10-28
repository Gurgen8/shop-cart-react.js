import React, { Component } from 'react';
import Events from "../helpers/Events.jsx";
import Cart from "../helpers/Cart.jsx";
import CartModal from './CartModal.jsx';

class CartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartLength: Cart.get().length,
      isOpenModal:false
    }
  }


    openModal=()=>{
      const{isOpenModal}=this.state
       this.setState({
         isOpenModal:!isOpenModal
       })
    }
  componentDidMount() {
    Events.on('cartChange', this.handleCartChange)

  
    
  }

  componentWillUnmount() {
    Events.remove('cartChange', this.handleCartChange)
  }

  handleCartChange = (cart) => {
    this.setState({ cartLength: cart.length })
  }

  render() {
    const { cartLength,isOpenModal } = this.state;
    return (<>
       <div   class="cart_icon">
     <span class="cart_icon_span"  onClick={this.openModal} > <i class="fa fa-shopping-cart"></i></span> <span class="count">{cartLength}</span>
      
      {isOpenModal? <CartModal/>:""}



            </div>
            
      </>
    );
  }
}

export default CartButton;
