import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducers";
import { rootEpic } from "./epics";
import { createEpicMiddleware } from "redux-observable";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(rootEpic);

export default store;
