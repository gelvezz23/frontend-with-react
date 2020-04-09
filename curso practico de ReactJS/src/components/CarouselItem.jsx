import React from 'react';
import { connect } from 'react-redux';
import { setFavorite,deleteFavorite } from '../actions'; 
import './../assets/styles/components/CarouselItem.scss';
import PropTypes from 'prop-types';
import playIcon from './../assets/image/icons8-play-64.png';
import moreIcon from './../assets/image/icons8-más-2-matemáticas-64.png';
import deleteIcon from './../assets/image/icons8-eliminar-64.png';
import { Link } from 'react-router-dom';

const CarouselItem = (props) =>{
    const {id , cover, title, year, contentRating, duration, mylist, isList} = props;

// agregar a mylist un elemento
    const handleSetFavorite = () => {
        const exists = mylist.find(item => item.id == id)
        if(exists){
            alert('Ya esta en tu lista de favoritos')
        }else{
            props.setFavorite({
                id,cover, title, year, contentRating, duration
            });
        }   
    }

    const handleDeleteFavorite = (ItemId) => {
        props.deleteFavorite(ItemId);
    }
    
   return(
    <div className="carousel-items">
        <img className="carousel-items__img" src={cover} alt={title}/>
            <div className="carousel-items__details">
                <Link to={`/player/${id}`}>
                    <img src={playIcon}/>
                </Link>
                {isList ? 
                <img src={deleteIcon} 
                     onClick={() => handleDeleteFavorite(id)} 
                     alt="delete icon"
                />
                : 
                <img src={moreIcon} 
                     onClick={handleSetFavorite} 
                     alt="plus icon"
                />

                }
                
                <p className="carousel-items__details--title">{title}</p>
                <p className="carousel-items__details--subtitle">
                {`${year} ${contentRating} ${duration} minutos`}</p>
            </div>        
    </div>
   )}
    
// propTypes la primera en minuscula siempre 
CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}   
//enviar datos a mylist
const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

const mapStateToProps = (state) => {
    return {
        mylist : state.mylist,
        trends : state.trends,
        originals: state.originals
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
//export default CarouselItem;
