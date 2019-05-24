import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

const HomePage = ({ isAuthenticated, logout }) => (
    <div>
        <h1>Hello World</h1>
        {isAuthenticated ? <button onClick={() => logout()}>Logout</button> : <Link to="/login">Login</Link>}
    </div>
);

HomePage.propTypes = {
    isAuthenticated: Proptypes.bool.isRequired,
    logout: Proptypes.func.isRequired
};

function mapStateToProps(state) {
    return { 
        isAuthenticated: !!state.user.token 
    };
};

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);