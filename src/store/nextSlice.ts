import { createSlice } from "@reduxjs/toolkit";
import { StoreProduct } from "../../type";

interface NextState {
  productData: StoreProduct[];
  favoriteData: StoreProduct[];
  allProducts: StoreProduct[];
  userInfo: null | string;
}

const initialState: NextState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null,
};


export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    //------------ REDUCERS USING FIND METHOD ------------
    addToCart: (state, action) => {
      const productAlreadyAdded = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (productAlreadyAdded) {
        productAlreadyAdded.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    addToFavorite: (state, action) => {
      const productAlreadyFavorited = state.favoriteData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (!productAlreadyFavorited) {
        state.favoriteData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const productAlreadyAdded = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      productAlreadyAdded && productAlreadyAdded.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const productAlreadyAdded = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (productAlreadyAdded?.quantity === 1) {
        productAlreadyAdded.quantity = 1;
      } else {
        productAlreadyAdded!.quantity--; // not null or undefined
      }
    },
    //------------ REDUCERS USING FILTER METHOD ------------
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    deleteFavorite: (state, action) => {
      state.favoriteData = state.favoriteData.filter(
        (item) => item._id !== action.payload
      );
    },

    //------------ OTHER REDUCERS ------------
    resetCart: (state) => {
      state.productData = [];
    },
    resetFavoriteData: (state) => {
      state.favoriteData = [];
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});


export const {
  addToCart, addToFavorite, increaseQuantity, decreaseQuantity, deleteProduct, resetCart, addUser,
  removeUser, setAllProducts, deleteFavorite, resetFavoriteData
} = nextSlice.actions;

export default nextSlice.reducer;
