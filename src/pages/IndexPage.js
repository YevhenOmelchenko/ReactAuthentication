/**
 * Created by Evgen on 26.12.2015.
 */
import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import { LoginLink } from 'react-stormpath';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Welcome!</h2>
                <hr />
                <div className="jumbotron">
                    <p>
                        <strong>Nice to meet you :)</strong>
                    </p>
                    <p>Ready to begin? Now you can try the next things:</p>
                    <ol className="lead">
                        <li><Link to="/register">Registration</Link></li>
                        <li><LoginLink /></li>
                        <li><Link to="/profile">Custom Profile Data</Link></li>
                    </ol>
                </div>
            </div>
        );
    }
}