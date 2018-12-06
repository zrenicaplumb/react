import React, { Component } from 'react';
import '../index.css';




export default class SubmitCreatedEventBtn extends React.Component{
      
      render(){
            console.log(this.props);
            return(
                  <button onChange={this.props.handleSubmit} style={styles.button}>Create Event</button>
            )    
      }

     
}

const styles = {
      button:{
            margin:'auto',
            display:'block',
            padding:5,
            marginTop: 30,
            marginBottom: 30,
            border:'none',
      }
}


   