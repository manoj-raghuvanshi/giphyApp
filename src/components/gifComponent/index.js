import React from 'react';
import './style.less';

export default class GifComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlayed: false
        }
    }

    togglePlay = () => {
        this.setState({
            isPlayed: !this.state.isPlayed
        })
    };

    render() {
        const {gif} = this.props;
        const {isPlayed} = this.state;
        let imgClass = "";
        if (isPlayed) {
            imgClass +="play"
        }
        return (
            <div className={'gif-component'}>
                <figure className={imgClass} onClick={this.togglePlay}>
                    {isPlayed ?
                        <img src={gif.images['downsized'].url} alt="The Pulpit Rock" width="304" height="228"/> : <img src={gif.images['480w_still'].url}  alt="The Pulpit Rock" width="304" height="228"/>}

                </figure>
            </div>
        )
    }
}
