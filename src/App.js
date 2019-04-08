import React from 'react'

import GifComponent from './components/gifComponent';
import Search from './components/search';
import './style.less'

const API_KEY = process.env.API_KEY;
const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=&limit=25&rating=G&lang=en`;
export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            gifs: [],
            offset: 0,
            searchTerm: ''
        }
    }

    gifSearchApi =(q) => {
        return fetch(`${BASE_URL}&q=${q}&offset=${this.state.offset}`)
            .then(response => {
                return response.json();
            }).then(res => {
                let gifs = this.state.gifs;
                this.setState({
                    gifs: gifs.concat(res.data),
                    searchTerm: q
                });
            })
            .catch(err => {
                throw err;
            })
    };

    handleSearchApi = (term, type) => {
        if (type === 'click') {
            this.setState({
                offset: 0,
                gifs: []
            }, () => this.gifSearchApi(term))
        } else {
            this.gifSearchApi(term)
        }
    };

    loadMoreGifs = () => {
        this.setState({
            offset: this.state.offset+1
        }, this.handleSearchApi(this.state.searchTerm));
    };

    componentDidMount() {

        this.refs.infiniteScroll.addEventListener("scroll", () => {
            console.log('in scroll')
            if (this.refs.infiniteScroll.scrollTop + this.refs.infiniteScroll.clientHeight >= this.refs.infiniteScroll.scrollHeight) {
                this.loadMoreGifs();
            }
        });
    }


    render() {
        const {gifs} = this.state;
        let style = {
            height: window.innerHeight
        }
        return (
            <div className={'app'}>
                <header className={'app-header'}>
                    <div className={'app-header-logo'}> Giphy App </div>
                </header>
                <Search handleSearch={this.handleSearchApi}/>
                <div className={'app-content'} ref={'infiniteScroll'} style={style}>
                    {gifs.map((gif, key)=> <GifComponent key={key} gif={gif}/>)}
                </div>
            </div>
        )
    }
}
