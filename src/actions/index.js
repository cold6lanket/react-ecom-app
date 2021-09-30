export const productsLoaded = (item) => {
    return {
        type: 'PRODUCT_LOADED',
        payload: item
    };
};

export const catalogSelected = (item) => {
    return {
        type: 'CATALOG_SELECTED',
        payload: item
    };
};

export const catalogAdded = (id) => {
    return {
        type: 'CATALOG_ADDED',
        payload: id
    };
};


export const emptySelectedItems = () => {
    return {
        type: 'CATALOG_EMPTY',
    };
};

export const removeSelectedItem = (item) => {
    return {
        type: 'PRODUCT_REMOVE',
        payload: item
    };
};


export const catalogSort = (item) => {
    return {
        type: `SORT_FROM_${item}`,
        payload: item
    };
};


export const catalogSortClear = () => {
    return {
        type: 'SORT_FROM_NONE',
    };
};

export const onBrandSelect = (id) => {
    return {
        type: 'ON_BRAND_SELECT',
        payload: id
    };
};

export const removeBrandSelect = (id) => {
    return {
        type: 'ON_REMOVE_BRAND_SELECT',
        payload: id
    };
};


export const incrementCartItem = (id) => {
    return {
        type: 'PRODUCT_INCREMENT',
        payload: id
    };
};

export const decrementCartItem = (id) => {
    return {
        type: 'PRODUCT_DECREMENT',
        payload: id
    };
};


export const closeSnackBar = () => {
    return {
        type: `CLOSE_SNACKBAR`,
    };
};


export const addFavouriteItem = (id) => {
    return {
        type: 'ADD_FAVOURITE_ITEM',
        payload: id
    };
};

export const removeFavouriteItem = (id) => {
    return {
        type: 'REMOVE_FAVOURITE_ITEM',
        payload: id
    };
};





