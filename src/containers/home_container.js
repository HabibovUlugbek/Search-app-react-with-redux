import ArtistList from "../components/Artistlist"
import React, {  useEffect} from 'react'
import Search from "../components/Search"

import {connect } from 'react-redux';
import {artistListAll, artistList} from '../actions/index';
import {bindActionCreators} from 'redux'

const HomeContainer = (props) => {

    useEffect(() => {
        props.artistListAll();
    }, [])

    
    const getKeyword = (e) => {
        let key = e.target.value;
        console.log(key)
       console.log( props.artistList(key))
    }

    
    return ( 
        <div>
            <Search keywords={getKeyword} />
            <ArtistList artists={props.artists.artistsList} />
            {/* <Sell /> */}
        </div>

     );
}

function mapStateToProps(state){
   return {
    artists:state.artists 
   }
}

function mapDispatchToProps (dispatch){
   return bindActionCreators({artistListAll ,artistList},dispatch)
}

 
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);