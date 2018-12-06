import React, { Component } from 'react';
import { render } from "react-dom";




import '../bootstrap.min.css';



import '../index.css';




export default class Nav extends React.Component{
      
      render(){
            
            return(
                 <nav>
                       <ul>
                             <li>
                                   <a href="../HomePage.js">Home</a>
                             </li>
                             <li>
                                   <a href="../CreateEventPage.js">Create</a>
                             </li>
                             <li>
                                   <a href="">About</a>
                             </li>
                       </ul>
                 </nav>
                  
            )    
      }

     
}



   



