import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Contact from './components/Contact';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress : 0
  }

  setProgress = (progress) => {
    this.setState({progress : progress})
  }

  render() {
    return (
      <div>

        <BrowserRouter>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/entertainment" element={<News apiKey =  {this.apiKey} setProgress = {this.setProgress}  key="entertainment" pageSize={12} country="in" category="entertainment" />}></Route> 
            <Route exact path="/" element={<News apiKey =  {this.apiKey} setProgress = {this.setProgress}  key="general" pageSize={12} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News apiKey =  {this.apiKey} setProgress = {this.setProgress}  key="business" pageSize={12} country="in" category="business" />}></Route>
            <Route exact path="/health" element={<News apiKey =  {this.apiKey} setProgress = {this.setProgress}  key="health" pageSize={12} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News apiKey =  {this.apiKey} setProgress = {this.setProgress}  key="science" pageSize={12} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News apiKey =  {this.apiKey} setProgress = {this.setProgress}  key="sports" pageSize={12} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News apiKey =  {this.apiKey} setProgress = {this.setProgress}  key="technology" pageSize={12} country="in" category="technology" />}></Route>

          </Routes>
        </BrowserRouter>
        <Contact/>
      </div>
    )
  }
}

