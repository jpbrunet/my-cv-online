import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import MainNav from './Components/MainNav/MainNav'
import './App.scss'
import Header from './Components/Header/Header'
import Profile from './Components/Profile/Profile'
import Section from './Components/Section/Section'

const TITLE = 'JP BRUNET | CV'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      device: '',
      width: window.innerWidth
    }
  }

  componentDidMount() {
    if(this.state.width <= 620){
      this.setState({device: "mobile"})
    } else {
      this.setState({device: "desktop"})
    }
  }

  render() {

    return (
      <Fragment>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <Header device={this.state.device}/>
        <MainNav/>
        <div className="row">
          <div className="col-sm col-lg-6 offset-lg-2 scrolling">

            <Section
              device={this.state.device}
              title="Skill"
            />
          </div>
          <div className="col-lg-4">
            <Profile device={this.state.device}/>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App