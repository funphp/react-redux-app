import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>React Redux Administration</h1>

                <p>React, Redux, ES6, Webpack all combo used</p>
                <Link to="about">to learn more</Link>
            </div>
        );
    }
}

export default HomePage;