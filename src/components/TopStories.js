import { useSelector } from "react-redux";
import { useRequest } from "redux-query-react";
import React, { useState } from 'react';

import Item from "../components/Item";
import {getTopStoryIds,topStoriesRequest,itemRequest,getItem} from "../story/stories";

const TopStories = props => {
  useRequest(topStoriesRequest());
  const topStoryIds = useSelector(getTopStoryIds);
  const [count, setCount] = useState(0);
  return (
    <>
    <ul>
      {topStoryIds.slice(count, count+ 20).map(itemId => (
        <Item itemId={itemId} key={itemId} />
      ))}
    </ul>
    <div className='buttonContainer'>
    {count >=20 && <input type='button' value='Previous' onClick={() => setCount(count - 20)}/>}
    {count + 40 <=topStoryIds.length  && <input type='button' value='Next' onClick={() => setCount(count + 20)}/>}
    </div>
    </>
  );
};

export default TopStories;
