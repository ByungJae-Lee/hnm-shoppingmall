// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// let initialState = {
//   productList: [],
//   selectItem: null,
//   isLoading: false,
//   error: null,
// };

// export const fetchProductDetail = createAsyncThunk(
//   "product/fetchDetail ",
//   async (id, thunkApi) => {
//     let url = `https://my-json-server.typicode.com/ByungJae-Lee/hnm-shoppingmall/products/${id}`;
//     let response = await fetch(url);
//     return await response.json();
//   }
// );

// const productDetailSlice = createSlice({
//   name: "productDetail",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProductDetail.pending, (state) => {
//         state.isLoading = false;
//       })
//       .addCase(fetchProductDetail.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.selectItem = action.payload;
//       })
//       .addCase(fetchProductDetail.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default productDetailSlice.reducer;
