import React from "react";
import { connect } from "react-redux";


//connect can be used in both class based and functinal comps
//it wires the dispatch method with the action and returns the state from redux to the particular comp as props...

const SongDetail = (props) => {
    if(!props.song) {
        return <div>Select a song</div>;
    }
    return (
        <div>
            {props.song.title}
        </div>
    );
}

const mapStateToProps = state => {
    return {song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);