export interface InputState {
  inputs: string[];
}
const initialState = {
  inputs: [],
};
type Action = { type: "ADD_INPUT"; payload: string };

export const inputReducer = (
  state: InputState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_INPUT": {
      return { ...state, inputs: [...state.inputs, action.payload] };
    }
    default:
      return state;
  }
};
