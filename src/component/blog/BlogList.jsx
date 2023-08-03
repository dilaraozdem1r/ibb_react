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

    //object destructing
    const {t} =this.props;

    return (
      <div><h1 className="text-center display-4 text-uppercase">blog list</h1>
        <table className="table table-hover table-striped">
          <thead>
            '':"ID"
            <tr>
              <th>{t('blog_id')}</th>
              <th>{t('blog_header')}</th>
              <th>{t('blog_content')}</th>
              <th>{t('date')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>item 1</td>
              <td>item 2</td>
              <td>item 3</td>
              <td>item 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default withTranslation()(BlogList)