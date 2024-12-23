export const FETCH_PLACES = "FETCH_PLACES";
export const FETCH_PLACES_SUCCESS = "FETCH_PLACES_SUCCESS";
export const MARK_VISITED = "MARK_VISITED";

export const fetchPlaces = () => ({ type: FETCH_PLACES });
export const fetchPlacesSuccess = (places: any[]) => ({
  type: FETCH_PLACES_SUCCESS,
  payload: places,
});
export const markVisited = (id: number) => ({
  type: MARK_VISITED,
  payload: id,
});
