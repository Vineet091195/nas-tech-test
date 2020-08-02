import * as React from "react";
import { Provider } from "react-redux";
import { Provider as ReduxQueryProvider } from "redux-query-react";

import TopStories from "../components/TopStories";
import { getQueries } from "../store";

const HackerNews = props => {
  return (
    <Provider store={props.store}>
      <ReduxQueryProvider queriesSelector={getQueries}>
        <>
          <h1>Hacker News</h1>
          <TopStories />
        </>
      </ReduxQueryProvider>
    </Provider>
  );
};

export default HackerNews;
