const init = [1, 2, 3];
export const todoReducer = (state = init, aciton: any) => {
  switch (aciton.type) {
    case "ADD_TODO": {
      return [...state, aciton.payload];
    }
    default:
      return state;
  }
};
