import {createSlice} from "@reduxjs/toolkit";

const initialValue = {
    allCategory: [],
<<<<<<< HEAD
    allSubCategory: [],
    product: [],
    loadingCategory: false,
=======
    subCategory: [],
    product: [],
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70
}


const productSlice = createSlice({
    name: "product",
    initialState: initialValue,
    reducers: {
        setAllCategory : (state, action)=>{
<<<<<<< HEAD
            state.allCategory = [...action.payload]
        },
        setAllSubCategory: (state, action)=>{
            state.allSubCategory = [...action.payload]
        },
        setLoadingCategory: (state, action)=>{
            state.loadingCategory = action.payload
=======
            console.log("first arE", action.payload)
            state.allCategory = [...action.payload]
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70
        }
    }
});


<<<<<<< HEAD
export const {setAllCategory, setAllSubCategory, setLoadingCategory} = productSlice.actions;
=======
export const {setAllCategory} = productSlice.actions;
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70


export default productSlice.reducer;