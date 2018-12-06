import React, { Component } from 'react';
import '../index.css';




export default class Location extends React.Component{
      
      render(){
            console.log(this.props);
            return(
                  <input onChange={this.props.changeLocation} value={this.props.location} placeholder='Location' style={styles.input}></input>
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


   