import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI imports
import {
    withStyles,
    Button,
    Grid,
    Paper,
    TextField,
    Select,
    InputLabel,
    FormControl,
    
}
    from '@material-ui/core';

const styles = theme => ({

    container: {
        minHeight: '400px'
    },
    form: {
        minWidth: '750px',
        maxWidth: '1000px',
        minHeight: '400px',
        // display: 'block',
        justify: 'center',
        alignItems: 'center',
        padding: '10px'
    },
    line: {
        padding: '25px',
        margin: '10px',
        alignItems: 'center',
    },
    inputs: {
        width: '250px',
        padding: '25px',
        margin: '10px',
        backgroundColor: 'white'
    },
    dropdown: {
        width: '250px',
        alignItems: 'center',
    },
    notes: {
        width: '400px',
        padding: '25px',
        margin: '10px',
    },
    button: {
        width: '100px',
        padding: '25px',
        margin: '10px',

    }
});

class volunteerEvent extends Component {

    state = {
        event_name: this.props.reduxStore.events[0].event_name,
        organizations_id: this.props.reduxStore.events[0].organizations_id,
        date: this.props.reduxStore.events[0].date,
        contacts_id: 0,
        collectBooks: 0,
        distBooks: 0,
        numOfKids: 0,
        notes: '',
    }

    // get all events on page load
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_EVENTS',
        })
    }

    // submit event handler
    addData = (event) => {
        console.log('adding event', this.state);
        event.preventDefault();
        this.props.dispatch({
            // set up new saga for dispatch type
            type: 'VOLUNTEER_EVENT',
            payload: this.state
        })
        this.setState({
            event_name: '',
            organizations_id: 0,
            date: '',
            contacts_id: 0,
            collectBooks: 0,
            distBooks: 0,
            numOfKids: 0,
            notes: '',
        })
        alert('Books Successfully Added!')
    }

    handleInputChangeFor = (event, propertyName) => {
        console.log('testing handleInputChangeFor')
        console.log(event.target.value)

        this.setState({
            [propertyName]: event.target.value
        })
    };

    handleEventChange = (event) => {
        console.log('event.target.value:', event.target.value)
        if (event.target.value === 'select') {
            console.log('in null case')
            return
        }
        this.setState({
            event_name: this.props.reduxStore.events[event.target.value].event_name,
            organizations_id: this.props.reduxStore.events[event.target.value].organizations_id,
            date: this.props.reduxStore.events[event.target.value].date,
            contacts_id: this.props.reduxStore.events[event.target.value].contacts_id,
            start_time: this.props.reduxStore.events[event.target.value].start_time,
            end_time: this.props.reduxStore.events[event.target.value].end_time
        })
    }

    render() {

        let eventList = 
            <>
                <option value='select' className={this.props.classes.dropdown}>select</option>
                {this.props.reduxStore.events.map((event, i) =>
                <option value={i} key={i} className={this.props.classes.dropdown}>{event.event_name}</option>
                )}
            </>
    
        return (
            <>
                <Grid
                    className={this.props.classes.container}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid
                        container
                        className={this.props.classes.form}
                        item lg={4}
                        justify="center"
                        alignItems="center"
                    >
                        <h1 align="center">Add Books By Event</h1>
                        <Paper elevation={5}>
                            <span className={this.props.classes.line}>
                                <FormControl className={this.props.classes.inputs} >
                                    <InputLabel>Event Name</InputLabel>
                                    <Select
                                        native
                                        className={this.props.classes.dropdown}
                                        onChange={(event) => this.handleEventChange(event)}>
                                        >
                                        {eventList}
                                    </Select>
                                </FormControl>
                                <br/>
                                <TextField
                                    className={this.props.classes.inputs}
                                    value={this.state.collectBooks}
                                    type="number"
                                    label="Books Collected"
                                    margin="normal"
                                    onChange={(event) => this.handleInputChangeFor(event, 'collectBooks')}
                                />
                                <br/>
                                <TextField
                                    className={this.props.classes.inputs}
                                    value={this.state.distBooks}
                                    type="number"
                                    label="Books Distributed"
                                    margin="normal"
                                    onChange={(event) => this.handleInputChangeFor(event, 'distBooks')}
                                />
                                <br/>
                                <TextField
                                    className={this.props.classes.inputs}
                                    value={this.state.numOfKids}
                                    type="number"
                                    label="Number of Children"
                                    margin="normal"
                                    onChange={(event) => this.handleInputChangeFor(event, 'numOfKids')}
                                />
                                <br/>
                                <TextField
                                    className={this.props.classes.notes}
                                    value={this.state.notes}
                                    type="text"
                                    margin="normal"
                                    label="Notes"
                                    onChange={(event) => this.handleInputChangeFor(event, 'notes')}
                                />
                                <br/>
                                <Button
                                    className={this.props.classes.button}
                                    color="primary">
                                    Cancel
                                </Button>
                                <Button
                                    className={this.props.classes.button}
                                    onClick={this.addData} color="primary">
                                    Submit
                                </Button>
                            </span>
                        </Paper>
                    </Grid>
                    <Button onClick={() => this.props.history.push('/home')}>
                        Home</Button>
                </Grid>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(withStyles(styles)(volunteerEvent));