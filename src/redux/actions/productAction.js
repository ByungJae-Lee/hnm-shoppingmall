function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/ByungJae-Lee/hnm-shoppingmall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    // setProductList(data);
  };
}

export const productAction = { getProducts };
