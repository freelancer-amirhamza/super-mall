import {createSlice} from "@reduxjs/toolkit";

const initialValue = {
    allCategory: [],
<<<<<<< HEAD
<<<<<<< HEAD
    allSubCategory: [],
    product: [],
    loadingCategory: false,
=======
    subCategory: [],
    product: [],
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70
=======
    allSubCategory: [],
    product: [],
    loadingCategory: false,
>>>>>>> 48281d2a96db3e1806e058228bf00ac89c2990c6
}


const productSlice = createSlice({
    name: "product",
    initialState: initialValue,
    reducers: {
        setAllCategory : (state, action)=>{
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 48281d2a96db3e1806e058228bf00ac89c2990c6
            state.allCategory = [...action.payload]
        },
        setAllSubCategory: (state, action)=>{
            state.allSubCategory = [...action.payload]
        },
        setLoadingCategory: (state, action)=>{
            state.loadingCategory = action.payload
<<<<<<< HEAD
=======
            console.log("first arE", action.payload)
            state.allCategory = [...action.payload]
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70
=======
>>>>>>> 48281d2a96db3e1806e058228bf00ac89c2990c6
        }
    }
});


<<<<<<< HEAD
<<<<<<< HEAD
export const {setAllCategory, setAllSubCategory, setLoadingCategory} = productSlice.actions;
=======
export const {setAllCategory} = productSlice.actions;
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70
=======
export const {setAllCategory, setAllSubCategory, setLoadingCategory} = productSlice.actions;
>>>>>>> 48281d2a96db3e1806e058228bf00ac89c2990c6


export default productSlice.reducer;