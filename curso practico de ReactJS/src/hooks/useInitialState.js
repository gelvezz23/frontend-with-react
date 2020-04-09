import {useState, useEffect} from 'react';



const useInitialState = (API) => {
const [ videos, setVideos] = useState({
    estado: false,
     mylist:[], 
     trends:[],
     originals:[]});
//didmount
useEffect(() =>{
    fetch(API)
    .then((response) => response.json()) //capta la data del api Response.json
    .then((data) => setVideos({...videos,...data,estado:true})) // llena el state con la data del api
}, []); 
return videos;
}

export default useInitialState;