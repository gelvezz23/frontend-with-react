import React, {Component} from 'react'

import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api';
import BadgeDetails from '../components/BadgeDetails';


class BadgeDetailsContainer extends Component {
    state = {
        loading:true,
        error:null,
        data:undefined,
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () =>{
        this.setState({loading:true, error:null})

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({ loading:false, data:data })
        }catch(Error) {
            this.setState({loading:false, error:Error})
        }
    }

    render(){
        const badge = this.state.data
        if(this.state.loading){
            return <PageLoading/>
        }

        if(this.state.error){
            return <PageError error={this.state.error}/>
        }

        return(
         
            <BadgeDetails badge={this.state.data}/>

         
        )

    }

}

export default BadgeDetailsContainer;