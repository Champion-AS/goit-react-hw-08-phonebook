export const handleFilteerConnect = (state) => {
  return state.phoneBook.items.filter(elem =>
    elem.name.toLowerCase().includes(state.filter.filter.toLowerCase())
  );
};

export const getFilter = state => state.filter.filter;
