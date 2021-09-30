const INITIAL_STATE = {
    products: null,
    loading: true,
    selected: 'all',
    basket: [],
    addedItems: [],
    priceSortFrom: null,
    click: false,
    brandsFilter: [],
    favouriteItems: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PRODUCT_LOADED':
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        
        case 'CATALOG_SELECTED': 
            return {
                ...state,
                selected: action.payload
            };

        case 'CATALOG_ADDED':
            const addedItem = action.payload;

            if (state.basket.includes(addedItem)) return {...state};

            const basketItems = [...state.basket, addedItem];
            const findItem = state.products.find(item => item.id === addedItem);
            
            const newItem = {
                name: findItem.name,
                price: findItem.price,
                category: findItem.category,
                id: findItem.id,
                url: findItem.image
            };

            return {
                ...state,
                basket: basketItems,
                addedItems: [...state.addedItems, newItem],
                click: true
            };

        case 'PRODUCT_REMOVE':
            const selected = action.payload;
            const filteredProducts = state.addedItems.filter(item => item.id !== selected);
            const filteredBasket = state.basket.filter(item => item !== selected);

            return {...state, basket: filteredBasket, addedItems: filteredProducts};
        
        case 'ON_BRAND_SELECT':
            const selectedBrand = action.payload;

            if (state.brandsFilter.includes(selectedBrand)) return state;

            return {...state, brandsFilter: [...state.brandsFilter, selectedBrand]};
        
        case 'ON_REMOVE_BRAND_SELECT':
            const brandToRemove = action.payload;
            const filteredBrand = state.brandsFilter.filter(brand => brand !== brandToRemove);

            return { ...state,  brandsFilter: filteredBrand};

        case 'ADD_FAVOURITE_ITEM':
            const favouriteId = action.payload;

            const included = state.favouriteItems.some(elem => elem.id === favouriteId);

            if (included) return state;

            const findFav = state.products.find(item => item.id === favouriteId);

            //if (state.favouriteItems.includes(favourite)) return state;

            return { ...state, favouriteItems: [...state.favouriteItems, findFav] };

        case 'REMOVE_FAVOURITE_ITEM':
            const unFavouriteId = action.payload;
            const filteredFavourites = state.favouriteItems.filter(item => item.id !== unFavouriteId);
            

            return { ...state, favouriteItems: filteredFavourites };

        case 'CATALOG_EMPTY':  
            return { ...state, basket: [], addedItems: []};

        case 'SORT_FROM_LOW': 
            return {...state, priceSortFrom: action.payload};

        case 'SORT_FROM_HIGH': 
            return {...state, priceSortFrom: action.payload};

        case 'SORT_FROM_NONE': 
            return {...state, priceSortFrom: null, brandsFilter: []};

        case 'CLOSE_SNACKBAR': 
            return {...state, click: false};

        default:
            return state;
    }
};

export default reducer;