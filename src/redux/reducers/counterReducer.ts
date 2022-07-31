const init = 0;
export const counterReducer = (state = init, action: any) => {
  switch (action.type) {
    case "INC": {
      return state + 1;
    }
    case "DEC": {
        if(state>0){
            return state - 1;
        }
     else return state
    }

    default:
      return state;
  }
};
