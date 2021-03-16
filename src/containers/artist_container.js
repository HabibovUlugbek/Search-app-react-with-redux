import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {artistDetail, clearArtistDetail} from '../actions'
import { bindActionCreators  } from "redux"

function ArtistContainer(props) {

    useEffect(() => {
        props.artistDetail(props.match.params.id)
        return () => {
            props.clearArtistDetail();
        }
    }, [props.match.params.id])

    const artistTemplate = (data) => (
        data.artistData ?
        <div className="artist_view">
            <div className="artist_background" style={{
                background:`url(/images/${data.artistData[0].cover})`
            }} >
                <Link to='/' >
                    Back Home
                </Link>
                <div className="name">{data.artistData[0].name}</div>
            </div>
            <div className="artist_description">
                <p>{data.artistData[0].bio}</p>
                <div className="tags">
                    <div>
                        <strong>Style:</strong> {data.artistData[0].style}
                    </div>
                </div>
            </div>

            <div className="artist_album_list">
                { data.artistData[0].albums ?
                    data.artistData[0].albums.map( item => (
                        <div key={item.cover} className="albums">
                            <div className="cover" style={{
                                background:`url(/images/albums/${item.cover})`
                            }}>

                            </div>

                        </div>
                    )) : null

                }
            </div>
        </div> 
        :null
    ) 

    return ( 
        <div>
            {artistTemplate(props.artists)}
        </div>
        
    )
}

function mapStateToProps(state){
  return {
       artists:state.artists 
        }
  } 

function mapDispatchToProps(dispatch){
   return bindActionCreators({artistDetail , clearArtistDetail},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer)
