import SHOP_DATA from './shopdata';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

  export const directoryReducer = (state=INITIAL_STATE, action) => {
      switch(action.type){
        default:
            return state
      }
        
  }