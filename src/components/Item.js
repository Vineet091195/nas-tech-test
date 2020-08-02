import * as React from "react";
import { useSelector } from "react-redux";
import { useRequest } from "redux-query-react";

import {getTopStoryIds,topStoriesRequest,itemRequest,getItem} from "../story/stories";

const Item = props => {
  const [{ isPending }] = useRequest(
    itemRequest(props.itemId)
  );
  const item = useSelector(state =>
    getItem(state, props.itemId)
  );

  return (
    <li className='listStyle'>
      {isPending && <div className='contentContainer'>Loading…</div>}
      {!!item && (
        <div>
          <div className='contentContainer'>
            <a href={item.url} target="_blank" >
              {item.title}
            </a>
          </div>
          <div className='contentContainer'>
            {item.score} points by{" "}
            <a
              href={`https://news.ycombinator.com/user?id=${item.by}`}
              target="_blank"
            >
              {item.by}
            </a>
          </div>
          <hr/>
        </div>
      )}
    </li>
  );
};

export default Item;
