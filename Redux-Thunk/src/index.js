import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {store} from './store'
import App from "./App";

/*
Редуктор (reducer) — 
это чистая функция, которая вычисляет 
следующее состояние дерева на основании
его предыдущего состояния и применяемого
действия.
*/
/*
Стор (Store)
содержит состояние приложения 
(application state); предоставляет 
доступ к состоянию с помощью getState() ; 
предоставляет возможность обновления состояния
с помощью dispatch(action) ;
Обрабатывает отмену регистрации слушателей
с помощью функции, возвращаемой
subscribe(listener) .
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
