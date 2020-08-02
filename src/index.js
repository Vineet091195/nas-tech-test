import React from "react";
import { render } from "react-dom";
import './scss/news.scss'
import HackerNews from "./components/HackerNews";
import store from "./store";

render(<HackerNews store={store} />, document.getElementById("root"));
