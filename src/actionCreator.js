import axios from 'axios';

const loadProducts=()=>{

	return dispatch =>{
		return axios.get("http://localhost:3001/phones")
			.then(response=>{
				dispatch({
					type: "REPLACE_PRODUCTS",
					products: response.data
				})
			})
	}
}



const showDetails = product =>{
	return{
      type: "SHOW_DETAILS",
      product
    };
};


export {showDetails, loadProducts};