import React from 'react'

import GifComponent from './components/gifComponent';
import Search from './components/search';
import './style.less'

const API_KEY = process.env.API_KEY;
const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=&limit=25&offset=0&rating=G&lang=en`;
export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            gifs: []
        }
    }

    gifSearchApi =(q) => {
        return fetch(`${BASE_URL}&q=${q}`)
            .then(response => {
                return response.json();
            })
            .catch(err => {
                throw err;
            })
    }

    handleSearchApi = (term) => {
        this.gifSearchApi(term)
            .then(res => {
                this.setState({
                    gifs: res.data
                })
                console.log(res);
            })
            .catch(e => console.log(e))
    };

    render() {
        const {gifs} = this.state;
        return (
            <div className={'app'}>
                <header className={'app-header'}>
                    <div className={'app-header-logo'}> Giphy App </div>
                </header>
                <Search handleSearch={this.handleSearchApi}/>
                <div className={'app-content'}>
                    {gifs.map((gif, key)=> <GifComponent key={key} gif={gif}/>)}
                </div>
            </div>
        )
    }
}
