import React, { Component } from 'react';
import '../index.css';




export default class EventTitle extends React.Component{
      
      render(){
            console.log(this.props);
            return(
                  <input onChange={this.props.changeTitle} value={this.props.title} placeholder='Name of your event' style={styles.input}></input>
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


   