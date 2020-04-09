import React,{useEffect} from 'react';
import { connect} from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import Notfound from '../container/NotFound';


const Player = (props) => {

    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;

    useEffect(() => {
        props.getVideoSource(id)
    },[])
    console.log(props.playing.source)
    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src = { props.playing.source } type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack() }>
                    Regresar
                </button>
            </div>
        </div>

    ) : <Notfound/>;

}
const mapStateToProps = (state) =>{
    return{
        playing: state.playing,
        originals : state.originals
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

//export default Player;
export default connect(mapStateToProps,mapDispatchToProps)(Player)