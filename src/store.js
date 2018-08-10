import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk'

const products = (state=[],action) =>{
	if(action.type==="REPLACE_PRODUCTS"){
		return action.products

	}

	return state;
};

const product = (state=[],action) =>{
	if (action.type==="SHOW_DETAILS"){
		return action.product
	}

	return state;
};


export default createStore(combineReducers({product, products}), applyMiddleware(thunk));