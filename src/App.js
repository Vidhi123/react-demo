import React, { Component } from 'react';
import './css/App.css';
import UserForm from "./user-form.jsx";
import Privacy from "./privacy";
import Done from "./done";

class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedTab:"user",
            user:{}
        };
        this.onUserSubmit=this.onUserSubmit.bind(this);
    }

    onUserSubmit(currentTab,formData){
        if(currentTab==="user"){
            this.setState({user:formData,selectedTab:"privacy"});
        }else if(currentTab==="privacy"){
            this.setState({privacy:formData,selectedTab:"done"});
        }

        console.log(formData);
    }
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img className="App-logo" />
          <h1 className="App-title">Welcome to Tray.io</h1>
        </header>
          <div className={""}>
          <ul className="nav nav-tabs">
              <li className={this.state.selectedTab==="user"?'active':"disabled"}><a>User</a></li>
              <li className={this.state.selectedTab==="privacy"?'active':"disabled"}><a href="#">Privacy</a></li>
              <li className={this.state.selectedTab==="done"?'active':"disabled"}><a href="#">Done</a></li>
          </ul>
          {this.state.selectedTab==="user"?
              <UserForm onUserSubmit={this.onUserSubmit}/>
              :null
          }
          {this.state.selectedTab==="privacy"?
              <Privacy onUserSubmit={this.onUserSubmit}/>
              :null
          }
          { this.state.selectedTab==="done" && <Done/> }
          </div>
      </div>
    );
  }
}

export default App;
