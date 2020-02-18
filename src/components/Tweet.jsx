import React from 'react';
import Tweet from './Tweet';
import PropTypes from 'prop-types';

function TweetList(props){
  return (
    <div>
      <hr/>
      {props.ticketList.map((tweet, index) =>
        <Tweet author={tweet.names}
          tweetBody={tweet.tweetBody}
          key={index}/>
      )}
    </div>
  );
}

TweetList.propTypes = {
  tweetList: PropTypes.array
};

export default TweetList;
