import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    container: {
        minHeight: '400px'
    },
    form: {
        minWidth: '750px',
        maxWidth: '1000px',
        minHeight: '400px',
        minHeight: '350',
        display: 'block',
        justify: 'center',
        alignItems: 'center',
        padding: '10px'
    },
    line: {
        padding: '25px',
        margin: '10px',

    },
    inputs: {
        width: '250px',
        padding: '10px'
    },
    submitButton: {
        justify: 'center',
        alignItems: 'center'
    },
    demographicsInputs: {
        width: '50px',
    },
    demographicsLine: {
        paddingLeft: '25px',
        paddingBottom: '10px',
        margin: '10px',

    },
    question: {
        paddingLeft: '25px'
    }

});

class NewOrganization extends Component {
    state = {
        newEntry: {
            name: '',
            logo: '',
            type: '',
            address_number: '',
            address_unit: '',
            address_street: '',
            city: '',
            state: '',
            county: '',
            zip: '',
            contact_name: '',
            phone_number: '',
            phone_number_type: '',
            email: '',
            notes: '',
            demographics_age_0_3: '',
            demographics_age_4_7: '',
            demographics_age_8_12: '',
            demographics_age_13_18: '',
            demographics_race_white: '',
            demographics_race_black: '',
            demographics_race_native: '',
            demographics_race_asian: '',
            demographics_race_pacific: '',
            demographics_poverty: ''

        },
    }
    handleChangeFor = (event, propertyName) => {
        console.log(event.target.value, propertyName);
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                [propertyName]: event.target.value
            }
        })
    }
    handleClick = async (event) => {
        event.preventDefault()
        console.log(this.state.newEntry)
        try {
            await this.props.dispatch({
                type: 'POST_NEW_ORGANIZATION',
                payload: this.state.newEntry
            })
        } catch {
            console.log('dispatch error')
        }
    }
    render() {
        return (
            <>
                <Grid className={this.props.classes.container}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid className={this.props.classes.form}
                        item lg={4}
                        justify="center"
                    ><h1 align="center">Add New Organization</h1>
                        <Paper elevation={5}
                        >
                            <span className={this.props.classes.line}>
                                <TextField
                                    className={this.props.classes.inputs}
                                    margin="normal"
                                    size='medium'
                                    type="text"
                                    label="Name of Organization"
                                    onChange={(event) => this.handleChangeFor(event, 'name')} />
                                <span>{' '}</span>
                                <TextField
                                    className={this.props.classes.inputs}
                                    margin="normal"
                                    type="text"
                                    label="Organization Logo Link"
                                    onChange={(event) => this.handleChangeFor(event, 'logo')} />
                            </span>
                            <br></br>
                            <span className={this.props.classes.line}>
                                <TextField
                                    className={this.props.classes.inputs}
                                    type="text"
                                    label="Non-Profit, School, etc."
                                    onChange={(event) => this.handleChangeFor(event, 'type')} />
                                <span>{' '}</span>
                                <TextField
                                    className={this.props.classes.inputs}
                                    type="text"
                                    label="Address Number"
                                    onChange={(event) => this.handleChangeFor(event, 'address_number')} />
                            </span>
                            <br></br>
                            <span className={this.props.classes.line}>
                                <TextField
                                    className={this.props.classes.inputs}
                                    type="text"
                                    label="Address Street"
                                    onChange={(event) => this.handleChangeFor(event, 'address_street')} />
                                <span>{' '}</span>
                                <TextField
                                    className={this.props.classes.inputs}
                                    type="text"
                                    label="Unit"
                                    onChange={(event) => this.handleChangeFor(event, 'address_unit')} />
                            </span>
                            <br></br>
                            <span className={this.props.classes.line}>
                                <TextField
                                    className={this.props.classes.inputs}
                                    type="text"
                                    label="City"
                                    onChange={(event) => this.handleChangeFor(event, 'city')} />
                                <span>{' '}</span>
                                <TextField
                                    className={this.props.classes.inputs}
                                    type="text"
                                    label="State"
                                    onChange={(event) => this.handleChangeFor(event, 'state')} />
                            </span>
                            <br></br>
                            <span className={this.props.classes.line}>
                                <TextField
                                    className={this.props.classes.inputs}
                                    type="text"
                                    label="Zip"
                                    onChange={(event) => this.handleChangeFor(event, 'zip')} />
                                <span>{' '}</span>
                                <TextField
                                    className={this.props.classes.inputs}
                                    type="text"
                                    label="County"
                                    onChange={(event) => this.handleChangeFor(event, 'county')} />
                            </span>
                            <h3 className={this.props.classes.question}>If you have demographics information please record it below.</h3>
                            <Grid container
                                className={this.props.classes.demographicsLine}
                                direction="column"
                                justify="center"
                                alignItems="flex-start"
                            ><p>Age breakdown by percentage (Should add up to 100%):</p>
                                    <Grid item>
                                    
                                    <TextField
                                        className={this.props.classes.demographicsInputs}
                                        type="integer"
                                        onChange={(event) => this.handleChangeFor(event, 'demographics_age_0_3')} />
                                <span>0-3</span></Grid><Grid item>
                                    
                                    <TextField
                                        className={this.props.classes.demographicsInputs}
                                        type="text"
                                        onChange={(event) => this.handleChangeFor(event, 'demographics_age_4_7')} />
                                <span>4-7</span></Grid><Grid item>
                                    
                                    <TextField
                                        className={this.props.classes.demographicsInputs}
                                        type="text"
                                        onChange={(event) => this.handleChangeFor(event, 'demographics_age_8-12')} />
                               <span>8-12</span></Grid><Grid item>
                                    
                                    <TextField
                                        className={this.props.classes.demographicsInputs}
                                        type="text"
                                        onChange={(event) => this.handleChangeFor(event, 'demographics_age_13_18')} />
                                <span>13-18</span></Grid>
                            </Grid>
                            <Grid container
                                className={this.props.classes.demographicsLine}
                                direction="column"
                                justify="center"
                                alignItems="flex-start"
                            ><p>Racial breakdown by percentage (Should add up to 100%):</p>
                                    <Grid item>
                                    <TextField
                                        className={this.props.classes.demographicsInputs}
                                        type="integer"
                                        onChange={(event) => this.handleChangeFor(event, 'demographics_race_white')} />
                                <span>White</span></Grid><Grid item>
                                    <TextField
                                        className={this.props.classes.demographicsInputs}
                                        type="text"
                                        onChange={(event) => this.handleChangeFor(event, 'demographics_race_black')} />
                                <span>Black or African American:</span></Grid><Grid item>
                                    <TextField
                                        className={this.props.classes.demographicsInputs}
                                        type="text"
                                        onChange={(event) => this.handleChangeFor(event, 'demographics_race_native')} />
                               <span>American Indian or Alaska Native:</span></Grid><Grid item>
                                    <TextField
                                        className={this.props.classes.demographicsInputs}
                                        type="text"
                                        onChange={(event) => this.handleChangeFor(event, 'demographics_race_asian')} />
                                <span>Asian</span></Grid><Grid item>
                                    <TextField
                                        className={this.props.classes.demographicsInputs}
                                        type="text"
                                        onChange={(event) => this.handleChangeFor(event, 'demographics_race_pacific')} />
                                <span>Native Hawaiian or Pacific Islander</span></Grid>
                            </Grid>
                            <Grid container
                                className={this.props.classes.demographicsLine}
                                direction="column"
                                justify="center"
                                alignItems="flex-start"
                            ><p>Percentage of children who qualify for free or reduced school lunch:</p>
                                    <TextField
                                        className={this.props.classes.demographicsInputs}
                                        type="integer"
                                        onChange={(event) => this.handleChangeFor(event, 'demographics_poverty')} />
                            </Grid>
                        </Paper>
                    </Grid >
                    <Grid item lg={4}
                        justify="center"
                        className={this.props.classes.form}
                    ><h2 align="center">Contact Information</h2>
                        <Paper elevation={5}>
                            <span className={this.props.classes.line}>
                                <TextField
                                    className={this.props.classes.inputs}
                                    type="text"
                                    label="Contact Name"
                                    onChange={(event) => this.handleChangeFor(event, 'contact_name')} />

                                <TextField
                                    className={this.props.classes.inputs}
                                    type="text"
                                    label="Phone Number"
                                    onChange={(event) => this.handleChangeFor(event, 'phone_number')} />
                            </span>
                            <br></br>
                            <span className={this.props.classes.line}>
                                <TextField
                                    className={this.props.classes.inputs}
                                    type="text"
                                    label="Phone Number Type"
                                    helperText="Mobile, Home, etc."
                                    onChange={(event) => this.handleChangeFor(event, 'phone_number_type')} />

                                <TextField
                                    className={this.props.classes.inputs}
                                    type="text"
                                    label="Email"
                                    helperText="name@mail.com"
                                    onChange={(event) => this.handleChangeFor(event, 'email')} />
                                <br></br>
                            </span>
                            <span className={this.props.classes.line}>
                                <TextField
                                    className={this.props.classes.inputs}
                                    type="text"
                                    label="Notes"
                                    onChange={(event) => this.handleChangeFor(event, 'notes')} />
                            </span>
                        </Paper>
                    </Grid>
                    <Button className={this.props.classes.submitButton}
                    onClick={this.handleClick}
                    size={'large'}
                    variant={'outlined'}>
                    Add
                </Button>
                </Grid>
                
            </>
        )
    }
}



const mapStateToProps = (reduxStore) => ({
    reduxStore
})

let connectApp = connect(mapStateToProps)(NewOrganization)

export default withStyles(styles)(connectApp)