import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
})

class TextField extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
            </div>
        )
    }
}

TextField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextField);

