import React, { Component } from 'react';
import '../index.css';


     


export default class ImageSection extends React.Component{
      render(){
            
           return(
            <div>
                  <img src={this.props.backgroundImage} style={styles.backgroundImage}></img>
                  <input type="file"  style={styles.uploadImageInput} onChange={this.props.uploadImage} />
            </div>
            )  
      }
     
}

const styles = {
      backgroundImage:{
            width:100,
            height:100,
            backgroundColor:'lightgray',
            margin:'auto',
            display:'block',
      },
      uploadImageInput:{
            margin:'auto',
            display:'block',
      }

}


   