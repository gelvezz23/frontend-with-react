import React,{useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
//import useInitialState from '../hooks/useInitialState';
import '../assets/styles/app.scss';

const API = 'http://localhost:3000/initalState';

const Home = ({ mylist, trends ,originals, searching}) => {
    //const initialState = useInitialState(API);
    // [ stado, metodo que captura el estado ] = useState(recibe array)
   /* const [ videos, setVideos] = useState({
        estado: false,
         mylist:[], 
         trends:[],
         originals:[]});
    //didmount
    useEffect(() =>{
        fetch('http://localhost:3000/initalState')
        .then((response) => response.json()) //capta la data del api Response.json
        .then((data) => setVideos({...videos,...data,estado:true})) // llena el state con la data del api
    }, []); 
    console.log(videos);  */ 
    return(
        <>    
            <Search isHome/>  
            {searching.length > 0 && 
                    <Categories title="Busqueda">
                        <Carousel>
                            {searching.map((item) => {
                                return(
                                    <CarouselItem key={item.id} {...item} />
                                    )
                                })
                            }    
                        </Carousel>
                    </Categories> 
                }
                {mylist.length > 0 && 
                    <Categories title="Mi lista">
                        <Carousel>
                            {mylist.map((item) => {
                                return(
                                    <CarouselItem 
                                        key={item.id} 
                                        {...item}
                                        isList
                                    />
                                    )
                                })
                            }    
                        </Carousel>
                    </Categories> 
                }
            <Categories title="Tendencia">
                <Carousel>  
                    {trends.map((item) =>{
                        return(
                            <CarouselItem key={item.id} {...item}/>
                            )
                        })
                    }
                </Carousel>
            </Categories>

            <Categories title="Originales">
                <Carousel>
                {originals.map((item) =>{
                    return(
                        <CarouselItem key={item.id} {...item}/>
                        )
                    })
                }
                </Carousel>
            </Categories>

            
        </>
    );
}
const mapStateToProps = state => {
    return {
        mylist : state.mylist,
        trends : state.trends,
        originals: state.originals,
        searching: state.searching

    }

}
//export default connect( props, actions)(Home);
export default connect(mapStateToProps, null)(Home)