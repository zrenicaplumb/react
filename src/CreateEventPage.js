import React, { Component } from 'react';
import './index.css';
import EventVisibilitySettingsBtn from './EventVisibilitySettingsBtn.js';
import ImageSection from './ImageSection.js';
import EventTitle from './EventTitle.js';
import Location from './Location.js';
import Description from './Description.js';
import SubmitCreatedEventBtn from './SubmitCreatedEventBtn.js';
import StartDate from './StartDate';
import EndDate from './EndDate';


     

export default class CreateEventPage extends React.Component{
      constructor(props){
            super(props);
            this.state = {
                  backgroundImage:"http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg",
                  title:'',
                  location:'',
                  startDate:null,
                  endDate:null,
            }
            this.changeTitle = this.changeTitle.bind(this);
            this.uploadImage = this.uploadImage.bind(this);
            this.changeLocation = this.changeLocation.bind(this);
            this.changeStartDate = this.changeStartDate.bind(this);
            this.changeEndDate = this.changeEndDate.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

      }
     
      changeTitle(e){
            this.setState({
                  title:e.target.value
            })
      }

      uploadImage(e){
            this.setState({
                  backgroundImage: e.target.files[0]
            })
            
      }

      changeLocation(e){
            this.setState({
                  location:e.target.value
            })
      }

      changeStartDate(e){
            this.setState({
                  startDate:e.target.value
            })
      }

      changeEndDate(e){
            this.setState({
                  endDate:e.target.value
            })
      }

      handleSubmit(e){
            
      }
      

      render(){
          console.log(this.state);

            return(
                 <div className='CreateEventPageWrap' style={styles.CreateEventPageWrap}>
                        
                        <form onSubmit={this.handleSubmit}>
                             <ImageSection 
                                    backgroundImage={this.state.backgroundImage }
                                    uploadImage={this.uploadImage}
                              />
                              <EventTitle 
                                    changeTitle={this.changeTitle} 
                                    title={this.state.title}
                              />
                              <Location 
                                    changeLocation={this.changeLocation}
                                    Location={this.state.location}
                              />
                              <StartDate 
                                    changeStartDate={this.changeStartDate}
                                    startDate={this.state.startDate}
                                    
                              />
                              <EndDate
                                    changeEndDate={this.changeEndDate}
                                    endDate={this.state.endDate}
                              /> 
                              <SubmitCreatedEventBtn
                                    handleSubmit={this.handleSubmit}
                              />
                        </form>
                        
                 </div>
            )
      }
}

const styles = {
      CreateEventPageWrap:{
            
         
            backgroundColor:'gray',
            padding:20,
            marginTop: 30,
            marginBottom: 30,
      }
}