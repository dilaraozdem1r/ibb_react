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
    const {blogList}=this.state;
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
              <th>{t('update')}</th>
              <th>{t('view')}</th>
              <th>{t('delete')}</th>
            </tr>
          </thead>
          <tbody>

            {blogList.map((temp)=>{
              <tr key={temp.id}>
                <td>{temp.header}</td>
                <td>{temp.content}</td>
                <td>{}</td>
                <td><i className="fa-solid fa-pen-nib text-primary text-center" style={{"cursor":"pointer"}}></i></td>
              <td><i className="fa-solid fa-binoculars text-warning text-center" style={{"cursor":"pointer"}}></i></td>
              <td><i className="fa-solid fa-trash text-danger text-center" style={{"cursor":"pointer"}}></i></td>
              </tr>
            })//end map
            }//end loop map 
            
          </tbody>
        </table>
      </div>
    )
  }
}

export default withTranslation()(BlogList)