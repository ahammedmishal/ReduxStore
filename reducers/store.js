import {createStore} from 'redux';
import cartItemsReducer from './cartitems';


const store = createStore(cartItemsReducer)

export default store