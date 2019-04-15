import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Giphy from './pages/Giphy';
import MediaPlayer from './pages/MediaPlayer'

const App = ({ store }) => (
        <Router>
            <Route path="/giphy" component={Giphy} />
            <Route path={"/player"} component={MediaPlayer}/>
        </Router>
);

App.propTypes = {
    // store: PropTypes.object.isRequired
};

export default App
