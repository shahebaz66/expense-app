import actions from "../actions";

const initialState = {};

export default function transaction(state = initialState, action: any) {
  switch (action.type) {
    case actions.ADD_TRANSACTION: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
