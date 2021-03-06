import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './VolunteerEventNav.css';

const NewEventNav = (props) => (
    <div className="nav-new-event">

        <div className="nav-title-div">
        
            <div className="buggie-logo">
                <img
                    className="logo-image"
                    alt="book buggie logo"
                    src="https://thefreebookbuggie.org/wp-content/uploads/2018/08/cropped-logo.jpg" />
            </div>
        </div>

        <div className="nav-right">
            <Link className="nav-link-new-event" to="/home">
                {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
                {props.user.id ? 'Home' : 'Login / Register'}
            </Link>
            
        </div>
    </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(NewEventNav);
