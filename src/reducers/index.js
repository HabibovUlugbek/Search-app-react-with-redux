import {combineReducers} from 'redux'
import artists from './artist_reducer'

const rootReducers = combineReducers({
    artists
})

export default rootReducers;