import React from 'react';

import './style.less'

export default class Search extends React.Component {
    state= {
        searchTerm: ''
    };

    handleClick = () => {
        this.props.handleSearch(this.state.searchTerm);
    };

    handleChange = (e) => this.setState({searchTerm: e.target.value})
    render() {
        return (
            <div className={'app-search'}>
                <input type="text"
                       className={'app-search-content input'}
                       value={this.state.searchTerm}
                       onChange={this.handleChange}
                       placeholder={"search for gif online"}
                />
                <button className={'app-search-content'} type={'button'} onClick={this.handleClick} value="Search">Search</button>
            </div>
        );
    }

}
