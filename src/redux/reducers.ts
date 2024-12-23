import { FETCH_PLACES_SUCCESS, MARK_VISITED } from "./actions";

interface State {
  places: { id: number; name: string; image: string; description: string }[];
  visited: number[];
}

const initialState: State = { places: [], visited: [] };

export const rootReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case FETCH_PLACES_SUCCESS:
      return { ...state, places: action.payload };
    case MARK_VISITED:
      return {
        ...state,
        visited: state.visited.includes(action.payload)
          ? state.visited.filter((v) => v !== action.payload)
          : [...state.visited, action.payload],
      };
    default:
      return state;
  }
};
