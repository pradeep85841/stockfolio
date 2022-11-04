import * as reducers from './BlockReducer.js'
import {combineReducers} from 'redux'

const Reducer = combineReducers({
    IT: reducers.ItReducer,
    DIVIDENT: reducers.DividentReducer,
    USER: reducers.UserReducer,
    ItList: reducers.ItList,
    DividentList: reducers.DividentList,
})
export default Reducer