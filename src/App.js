import React from 'react';
import './App.css';
import axios from "axios";
import SiteHead from './components/SiteHead';
import Navbar from './components/Navbar';


class App extends React.Component {

  state = {
    users: [],
  };

  componentDidMount() {
      axios.get(`https://randomuser.me/api/?results=30&nat=Aus`)
        .then(res => {
          this.setState({ users: res.data.results });
        });
  }


  render() {
    return (
      <div className="App">
        <SiteHead />
        {this.state.users.length > 0 &&
        <Navbar users={this.state.users}/>
  }
      </div>
    );
  }
}

export default App;
