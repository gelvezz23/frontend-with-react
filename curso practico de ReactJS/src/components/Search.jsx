import React from 'react';
import { connect } from 'react-redux';
import {getVideo} from '../actions';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = (props) =>{ 
    const { isHome , getVideo } = props;
    const inputStyle = classNames('input', {isHome}); 

    const handleChange = (event) => {
        const {value } = event.target;
        if(value){
         getVideo(event.target.value);
        }else{
            getVideo("")
        }
    }
    return(
        <section className="main">
            <h1 className="main__title">¿ Que quieres ver hoy ?</h1>
            <input name="inputSearch" 
                onChange={handleChange} 
                className={inputStyle} 
                type="text" 
                placeholder="buscar ..."/>
        </section>

    );
}

const mapDispatchToProps = {
    getVideo,
}
//export default Search;
export default connect(null,mapDispatchToProps)(Search);