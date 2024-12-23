import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers";
import { rootEpic } from "./redux/epics";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
