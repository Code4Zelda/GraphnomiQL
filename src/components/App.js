import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import SimpleModal from './SimpleModal.js'
import '../styles/App.css';
import Wrapper from '../containers/graphContainer.jsx'
import Panel from './Panel.js'



class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
//                 <h1>My React App! TESTINfddwdwadw:)dwdG!</h1>
                {/* <Wrapper /> */}
                {/* <h1>My React App! TESTING! </h1> */}

                {/* <Button variant="contained" color="primary">
                    Hello World</Button> */}

                <SimpleModal />
            </div>
        );
    }
}

export default App;