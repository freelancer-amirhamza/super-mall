import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    allCategory: [],
<<<<<<< HEAD
    allSubCategory: [],
    product: [],
    loadingCategory: false,
};
=======
    subCategory: [],
    product: [],
}

>>>>>>> 243ced43ca22adea7b7b8447d17f8411a1f22396

const productSlice = createSlice({
    name: "product",
    initialState: initialValue,
    reducers: {
<<<<<<< HEAD
        setAllCategory: (state, action) => {
            state.allCategory = [...action.payload];
        },
        setAllSubCategory: (state, action) => {
            state.allSubCategory = [...action.payload];
        },
        setLoadingCategory: (state, action) => {
            state.loadingCategory = action.payload;
        },
    },
});

export const { setAllCategory, setAllSubCategory, setLoadingCategory } = productSlice.actions;
=======
        setAllCategory : (state, action)=>{
            console.log("first arE", action.payload)
            state.allCategory = [...action.payload]
        }
    }
});


export const {setAllCategory} = productSlice.actions;

>>>>>>> 243ced43ca22adea7b7b8447d17f8411a1f22396

export default productSlice.reducer;