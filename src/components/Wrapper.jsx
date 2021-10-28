import React, { Component } from 'react';
import Headers from './Headers.jsx';
import Footer from "./Footer.jsx";


class Wrapper extends Component {
  render() {
    return (
      <>
    
        <Headers />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default Wrapper;
