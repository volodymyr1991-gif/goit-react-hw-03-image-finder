import React, { Component } from "react";
import  "./Loader.css";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class Spiner extends Component {
  render() {
    return (
      <div className='Loader'>
        <Loader type="Oval" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }
}