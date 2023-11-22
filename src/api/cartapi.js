import axios from "axios";

export const getCartItems=()=>{
    try{
        const result = axios.get("http://localhost:3000/api/cart");
        return result.data;
    }
    catch(err){
        console.log(err);
    }
}
export const addToCart=()=>{

}
export const removeFromCart=()=>{

}