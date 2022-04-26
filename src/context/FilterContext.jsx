import React, {useContext, useReducer, useEffect} from 'react'
import {data} from '../data'
import { UPDATE_FILTERS, FILTER_PRODUCTS , UPDATE_SEARCH, CLEAR_FILTERS, SORT_PRODUCTS, UPDATE_SORT, TOGGLE_WISHLIST, DELETE_WISH} from '../actions';
import { filterReducer } from '../reducer/filterReducer';

const initialState = {
    product_list: data,
    filtered_products:data,
    filters: {
        text: '',
        category: 'all',
        brands: []
    },
    sort: 'recommended'
};

const FilterContext = React.createContext();

export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer, initialState)
    const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'brands') {
      value = e.target.value
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }

  const updateSearchText = (e) => {
      dispatch({type: UPDATE_SEARCH, payload: {value: e.target.value}})
  }

  const clearFilters = () => {
      dispatch({type: CLEAR_FILTERS})
  }

  const updateSort = (e) => {
    dispatch({type: UPDATE_SORT, payload: {value: e.target.value}});
  }
    
  useEffect(() => {
    dispatch({type: FILTER_PRODUCTS})
    dispatch({type: SORT_PRODUCTS})
  }, [state.filters, state.sort, state.filters.text])

  return (
    <FilterContext.Provider
      value={{ ...state, updateFilters, updateSearchText, clearFilters, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export const useFilterContext = () => {
    return( useContext(FilterContext))
}
