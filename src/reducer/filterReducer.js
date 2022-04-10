import {
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  UPDATE_SEARCH,
  CLEAR_FILTERS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  TOGGLE_WISHLIST,
  DELETE_WISH
} from "../actions";

export const filterReducer = (state, action) => {
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    if (name === "category") {
      return { ...state, filters: { ...state.filters, [name]: value } };
    } else {
      const brands = [...state.filters.brands];
      if (brands.includes(value)) {
        const updatedBrands = brands.filter((item) => {
          return item !== value;
        });
        return {
          ...state,
          filters: { ...state.filters, brands: updatedBrands },
        };
      } else {
        const updatedBrands = [...state.filters.brands, value];
        return {
          ...state,
          filters: { ...state.filters, brands: updatedBrands },
        };
      }
    }
  } 

  if (action.type === FILTER_PRODUCTS) {
    const { product_list } = state;
    const { text, category, brands } = state.filters;
    let tempProducts = [...product_list];

    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.title.toLowerCase().startsWith(text);
      });
    }

    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    } 
    
    if(category === 'All'){
        tempProducts = [...product_list]
    }

    if (brands.length > 0) {
      tempProducts = tempProducts.filter((product) => {
        return brands.includes(product.brand);
      });
    }

    return { ...state, filtered_products: tempProducts };
  }

    if (action.type === SORT_PRODUCTS) {
      const { sort, filtered_products } = state;
      if (sort === "recommended") {
        return { ...state, ...filtered_products };
      }

      if (sort === "price-highest") {
        const sorted_products = filtered_products.sort((a, b) => {
          return b.price - a.price;
        });
        return { ...state, filtered_products: sorted_products };
      }

      if (sort === "price-lowest") {
        const sorted_products = filtered_products.sort((a, b) => {
          return a.price - b.price;
        });
        return { ...state, filtered_products: sorted_products };
      }
    }


  if(action.type === UPDATE_SEARCH){
      return {...state, filters: {...state.filters, text: action.payload.value}}
  }

  if(action.type === UPDATE_SORT){
      return {...state, sort: action.payload.value}
  }

  if (action.type === CLEAR_FILTERS){
    return {
      ...state,
      filters: {
        text: "",
        category: "all",
        brands: [],
      },
    };
  } 

  if (action.type === TOGGLE_WISHLIST){
      const updatedList = state.filtered_products.map((item) => {
        if(item.id === action.payload.value){
            return {...item, inWishlist: !item.inWishlist}
        } else {
            return item
        }
      })
      return {...state, filtered_products: updatedList}
  }
  
  if (action.type === DELETE_WISH) {
    const updatedList = state.filtered_products.map((item) => {
        if(item.id === action.payload.value){
            return {...item, inWishlist: false}
        } else {
            return item
        }
    })
    return {...state, filtered_products: updatedList}
  }
  
  return { ...state };
};
