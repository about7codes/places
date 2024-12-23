import { ofType } from "redux-observable";
import { mergeMap, of } from "rxjs";
import axios from "axios";
import { FETCH_PLACES, fetchPlacesSuccess } from "./actions";

export const fetchPlacesEpic = (action$: any) =>
  action$.pipe(
    ofType(FETCH_PLACES),
    mergeMap(() =>
      axios
        .get("/locations.json")
        .then((response) => fetchPlacesSuccess(response.data))
        .catch((error) =>
          of({ type: "FETCH_PLACES_ERROR", payload: error.message })
        )
    )
  );

export const rootEpic = fetchPlacesEpic;
