import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeNameText: '',
    };
    this.handleNameText = this.handleNameText.bind(this);
  }

  handleNameText(event) {
    this.setState({ typeNameText: event.target.value })
  }

  render() {
    const { addNode, deleteNode } = this.props;
    return (
      <div className="edit">
          <br/>
          <br/>
          <br/>

        <form>
          <div className='center'>
          <Typography variant="h6" >
            Add/Delete Table
          </Typography>
          <br/>
          <br/>
          <TextField
            label="Type"
            onChange={this.handleNameText}
            className="fieldNameText"
          />
          <Button variant="contained" color="primary"
            onClick={() => { addNode(this.state.typeNameText); }}
          >
            Add Type
          </Button>
          <br/>
          <br/>

          <Button variant="contained" color="secondary"
            onClick={() => { deleteNode(this.state.typeNameText); }}
          >
            Delete Type
          </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Edit;
