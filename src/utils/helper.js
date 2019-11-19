export const objToList = obj => {
    let list = [];
    for( let key in obj) {
        list.push(obj[key]);
    }
    return list;
};

export const addToLocalFavoriteList = id => {
    const data = getLocalFavoriteList();
    localStorage.setItem('favoriteCurrList', JSON.stringify([...data, id]));
};

export const getLocalFavoriteList = () => {
    if(!localStorage.getItem('favoriteCurrList')) {
        return [];
    }
    return JSON.parse(localStorage.getItem('favoriteCurrList'));
};

export const addStatusKey = list => {
    return list.map(item => ({...item, favor : false}));
};

export const addLocalStatusKey = list => list.map(item => {
    const data = getLocalFavoriteList();
    if(data.includes(item.id)){
        return {...item, favor : true}
    }
    return item;
});

export const removeFromLocalFavoriteList = id => {
    const data = getLocalFavoriteList();
    const result = data.filter(item => item !== id);
    localStorage.setItem('favoriteCurrList', JSON.stringify(result));
};