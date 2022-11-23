import React from "react";
import {connect} from 'react-redux';
import {selectSong} from '../actions';
//connect is used in here!

//connects purpose is to return data from redux store to react component

class SongList extends React.Component {
    rednerList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={()=> this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }

    render() {
     
        return <div className="ui divided list">{this.rednerList()}</div>
    };
}


//the below fun gives the whole redux store state
const mapStateToProps = (state) => {
    
    return {songs: state.songs};    
}

export default connect(mapStateToProps, {selectSong: selectSong}) (SongList);