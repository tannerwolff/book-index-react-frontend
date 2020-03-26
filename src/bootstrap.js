import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";

import ViewBook from './components/viewBook';
import AddBook from './components/addBook';
import DeleteLanding from './components/deleteLanding';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
      <div>
          <div className="nav">
            <NavLink  exact to='/'>Home</NavLink>
            <NavLink to='/add_book'>Add Book</NavLink>
          </div>
        
        <div>
          <Route exact path="/" component={App} />
          <Route path="/view_book/:id" component={ViewBook}/>
          <Route path="/add_book" component={AddBook}/>
          <Route path="/deleted_book" component={DeleteLanding}/>
        </div>
      </div>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
