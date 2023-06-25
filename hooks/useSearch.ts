export const useSearch = (query: string, items) => {
    if(query !== '') {
        const filteredItems =  items?.filter((item) => item.name.toUpperCase().indexOf(query.toUpperCase()) > -1);
    
        return filteredItems;
    } else {
        return items;
    }
};