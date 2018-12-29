import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';


class EditField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fieldName: "",
            nodeName: "",
            typeKind: "",
            typeName: "",
            ofTypeKind: "",
            ofTypeName: "",
            dataTypeSelection: "",
        }
        this.handleFieldName = this.handleFieldName.bind(this);
        this.handleNodeName = this.handleNodeName.bind(this);
        this.handleTypeOrOfType = this.handleTypeOrOfType.bind(this);
        this.handleOfTypeName = this.handleOfTypeName.bind(this);
    }

    handleFieldName(event) {
        this.setState({ fieldName: event.target.value });
    }

    handleNodeName(event) {
        this.setState({ nodeName: event.target.value })
    }

    handleTypeOrOfType(event) {
        if (event.target.value === 'OBJECT' || event.target.value === 'LIST') {
            this.setState({
                dataTypeSelection: event.target.value,
                ofTypeKind: event.target.value
            })
        } else {
            const name = event.target.value.slice(7);
            this.setState({
                dataTypeSelection: event.target.value,
                typeKind: 'SCALAR',
                typeName: name
            })
        }
    }

    handleOfTypeName(event) {
        this.setState({
            ofTypeName: event.target.value
        })
    }

    render() {
        return (
            <div className="center">
                <form>
                    <br />
                    <br />
                    <br />
                    <Typography variant='h6'>
                        Add/Delete Field
                  </Typography>
                    <TextField
                        label='Field Name'
                        onChange={this.handleFieldName}
                    />
                    <br />
                    <Typography variant='body1'>
                        <br />
                        to/from
                    </Typography>
                    <br />
                    <TextField
                        label='Type Name'
                        onChange={this.handleNodeName}
                    />
                    <br />
                    <Typography variant='body1'>
                        <br />
                        as (for addition only)
                    </Typography>
                    <FormControl>
                        <InputLabel htmlFor="data-type-helper">Data Type</InputLabel>
                        <Select
                            value={this.state.dataTypeSelection}
                            onChange={this.handleTypeOrOfType}
                            input={<Input name="data-type" id="data-type-helper" />}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="SCALAR/String">SCALAR/String</MenuItem>
                            <MenuItem value="SCALAR/Boolean">SCALAR/Boolean</MenuItem>
                            <MenuItem value="SACLAR/Float">SACLAR/Float</MenuItem>
                            <MenuItem value="SCALAR/Int">SCALAR/Int</MenuItem>
                            <MenuItem value="OBJECT">OBJECT</MenuItem>
                            <MenuItem value="LIST">LIST</MenuItem>
                        </Select>
                        <FormHelperText>Enter relationship below if nonscalar</FormHelperText>
                    </FormControl>
                    <br />
                    <br />

                    <TextField
                        label="Relation to Type"
                        onChange={this.handleOfTypeName}
                        helperText="For OBJECT/LIST above"
                    />
                    <br />
                    <br />
                    <Button variant="contained" color="primary">Add Field</Button>
                    <Button variant="contained" color="secondary">Delete Field</Button>
                </form>

            </div>
        )
    }
}

export default EditField;
