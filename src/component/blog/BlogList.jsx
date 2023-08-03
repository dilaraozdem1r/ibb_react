import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import BlogApi from '../../services/BlogApi.js';
//CLASS
 class BlogList extends Component {
  //componentteki isim
  static displayName="Blog_List";

  constructor(props){
    super(props);

    //state
    this.state={
      blogList:[],
    }
    //BIND
  }

  //CDM
  componentDidMount(){
    BlogApi.blogServicesList()
    .then((response)=>{console.log(response);
      this.setState({blogList:response.data})
    }).
    catch((err)=>{console.log('error:',err)})
  }

  render() {
    return (
      <div>BlogList</div>
    )
  }
}

export default withTranslation()(BlogList)