import React, { Component } from 'react';
import './index.css';
import './bootstrap.min.css';

export default class CreateEventPage extends React.Component{
      render(){
            return(
                  <div className="createEventPageWrap">
                        <BackgroundImage/>
                        <EventVisibilitySettingBtn/>

                  </div>
            )
      }
}