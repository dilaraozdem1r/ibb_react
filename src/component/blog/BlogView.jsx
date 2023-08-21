import React, { Component } from 'react'

 class BlogView extends Component {

  constructor(props){
    super(props);
    this.state={
      //id:this.props.value.matches[0].params.id
    }
  }

  static displayName="Blog_View";

  render() {
    return (
      <React.Fragment>BlogView</React.Fragment>
    )
  }

}

export default BlogView;
