import React from 'react';
import NewTweetForm from './NewTweetForm'

class NewTweetControl extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
      this.setState({formVisibleOnPage: true});
      console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
    }

  render() {
    return (
      <NewTweetForm/>
    );
  }
}

export default NewTweetControl;
