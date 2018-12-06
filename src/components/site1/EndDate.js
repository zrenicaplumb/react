import React, { Component } from 'react';
import '../index.css';




export default class EndDate extends React.Component{
      
      render(){
            console.log(this.props);
            return(
                 
                  <input type='date' onChange={this.props.changeEndDate} value={this.props.endDate} placeholder='End date' style={styles.input}></input>

                        
                 
                  
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


   