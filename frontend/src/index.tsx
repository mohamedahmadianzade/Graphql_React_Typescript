import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./router/router";
import { client } from "./graphql/client";
import store from "./state/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.log("---------------------------------");
console.log(process.env.REACT_APP_GRAPHQL_SERVER_URL);
