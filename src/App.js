import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Home from './components/Home/Home';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import { Route } from 'react-router-dom';

class App extends Component {

constructor(){
  super();
  this.state = {
    projects:[
      {title:'Rich Web Dev', category:'Web Development'},
      {title:'Artificial Intelligence', category:'Science'}
    ]
  }
}

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          <Route path="/" component={Home} />
          <Route path="/Faq" component={FAQ} />
          <Route path="/Content" component={Content} />
        </div>

        

        <Projects projects={this.state.projects} />

        <Footer />

      </div>
    );
  }
}

export default App;
