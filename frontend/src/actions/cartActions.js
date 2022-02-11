import axios from "axios"; // when we add an item to the cart we want to make a request to /api/products/id to get the fields needed
import { CART_ADD_ITEM, CART_REMOVE_TIEM } from "../constants/cartConstants";

export const addToCart = (id, qty)=> async (dispatch, getState)=>{
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price, 
            countInStock: data.countInStock,
            qty
        }
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)); // we make it a JSON string bc localStarage only accept strings
};