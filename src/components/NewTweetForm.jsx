import React from 'react';

function NewTweetForm(){
  let _author = null;
  let _tweetBody = null;

  function handleNewTweetFormSubmission(event) {
    event.preventDefault();
    console.log(_author.value);
    console.log(_tweetBody.value);
    _author.value = '';
    _tweetBody.value= '';
  }

  return (
    <div>
      <form onSubmit={handleNewTweetFormSubmission}>
        <input
          type='text'
          id='author'
          placeholder='Author'
          ref={(input) => {_author = input;}}/>
        <input
          id='tweetBody'
          placeholder='What you thinkin?'
          ref={(input) => {_tweetBody = input;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTweetForm;
