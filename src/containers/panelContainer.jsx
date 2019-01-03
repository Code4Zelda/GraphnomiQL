import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Edit from '../components/Edit.jsx';
import * as actions from '../actions/introspectionActions';
import PanelDisplay from '../components/PanelDisplay.jsx';

const mapStateToProps = store => ({
  schema: store.root.schema,
  selectedNode: store.root.selectedNode,

})

const mapDispatchToProps = dispatch => ({
  addNode: name => dispatch(actions.addNode(name)),
  deleteNode: name => dispatch(actions.deleteNode(name)),
  addField: (fieldName, nodeName, typeKind, typeName, ofTypeKind, ofTypeName) => dispatch(actions.addField(fieldName, nodeName, typeKind, typeName, ofTypeKind, ofTypeName)),
  deleteField: (nodeName, fieldName) => dispatch(actions.deleteField(nodeName, fieldName)),
  renderNode: () => dispatch(actions.renderNode()),
  clearGraph: () => dispatch(actions.clearGraph())
})
// entire side panel component
// top - schema selection
// middle - type info
// botton - editing area
class panelContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel">
        {/* <div className="panelHeadingContainer"> */}
        {/* <h1 id="panelHeading">Welcome to GraphnomiQL!</h1> */}
        <div id="panelHeading">
        <div className="glitch" data-text="Strobocops">

          <span className="glitch__color glitch__color--red">GraphnomiQL</span>


          <span className="glitch__line glitch__line--first"></span>
          <span className="glitch__line glitch__line--second"></span>
        </div>
        
        <br />
        </div>
        {/* </div> */}
        <br />
        <br />
        <div className='center'>
          <label>Select Your Schema Here!</label>
          <br />
          <br />
          <Button id="ChangeSchema" onClick={this.props.handleOpen}>Change Schema</Button>
        </div>
        <PanelDisplay schema={this.props.schema} selectedNode={this.props.selectedNode} />
        <Edit schema={this.props.schema} addNode={this.props.addNode} deleteNode={this.props.deleteNode} addField={this.props.addField} deleteField={this.props.deleteField} renderNode={this.props.renderNode} clearGraph={this.props.clearGraph}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(panelContainer);
