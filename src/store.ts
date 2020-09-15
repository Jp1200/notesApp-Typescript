import { createStore } from "redux";
import { inputReducer } from "./inputReducer";
export const store = createStore(inputReducer);
