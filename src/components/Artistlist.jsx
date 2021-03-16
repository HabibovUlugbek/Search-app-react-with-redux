import { Link } from 'react-router-dom'


const ArtistList = ({artists}) => {
    return ( 
        <div className="artist_container">
            { artists && artists.length >0 ?
                artists.map(item => (
                    <Link to={`/artists/${item.id}`} key={item.id} className="artist_item" >

                        <div className="cover" style={{
                                background:`url(/images/${item.cover})`
                            }}>
                            <div>
                                {item.name}
                            </div>
                        </div>
                    </Link>
                )) : null
            }
        </div>
     );
}
 
export default ArtistList;