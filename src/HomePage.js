import React, { Component } from 'react';
import { render } from "react-dom";
import Nav from './components/Nav.js';



import './bootstrap.min.css';



import './index.css';




export default class HomePage extends React.Component{
      
      render(){
            console.log(this.props);
            return(
                 
                  <div className="homePageWrap">
                        <Nav/>
                  </div>
            )    
      }

     
}

const styles = {
      input:{
            margin:'auto',
            display:'block',
            padding:5,
            marginTop: 30,
            marginBottom: 30,
            border:'none',
      }
}


   



