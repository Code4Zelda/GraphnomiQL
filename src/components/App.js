import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import MainContainer from '../containers/MainContainer.jsx';
import '../styles/App.css';
<<<<<<< HEAD
import Wrapper from '../containers/graphContainer.jsx'
import Panel from './Panel.js'

=======
>>>>>>> 6e1934acb8f00a95ed8f700102da0482b9257fb7


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main'>
        <h1>My React App! TESTING!</h1>
        <MainContainer />
      </div>
    );
  }
}

export default App;
