import axios from 'axios'
export const setProducts = (products)=>{
    return{type:'PRODUCTS_LIST',payload:products}
}
export const startGetProducts = ()=>{
    return(dispatch)=>{
        axios.get("http://dct-billing-app.herokuapp.com/api/products",{
            headers :{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const products = response.data
            console.log(products)
            dispatch(setProducts(products))
        })
    }
}

