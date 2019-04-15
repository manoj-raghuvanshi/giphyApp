import React from 'react'

class MediaPlayer extends React.Component {
    state = {}
    handleInputChange = (e) => {
        this.setState({value: e.target.value})
    };
    handleSearch = () => {

    };

    render() {
        console.log(this.state)
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleInputChange}/>

            <div id='media-player'>
                <video id='media-video' controls height={300} width={500} autoPlay={true}>
                    <source src={this.state.value} type='video/mp4' />
                </video>
                <div id='media-controls'/>
            </div>
            </div>

        )
    }


}

export default MediaPlayer;
