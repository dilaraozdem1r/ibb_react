import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import BlogApi from "../../services/BlogApi.js";
import { Link } from "react-router-dom";
//CLASS
class BlogList extends Component {
  //componentteki isim
  static displayName = "Blog_List";

  constructor(props) {
    super(props);

    //state
    this.state = {
      blogList: [],
    };
    //BIND
    this.update = this.update.bind(this);
    this.view = this.view.bind(this);
    this.delete = this.delete.bind(this);
  }

  // CDM
  componentDidMount() {
    //const url='https://jsonplaceholder.typicode.com/posts';
    BlogApi.blogServiceList()
      .then((response) => {
        console.log(response);
        this.setState({
          blogList: response.data,
        }); //end setState
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  } //end CDM

  //Function


  update(id) {
    // alert(id);
    window.open("/blog/update/" + id);
  }

  delete(id) {
    //alert(id);
    BlogApi.blogServiceDelete(id).then((response)=>{this.setState({
      blogList:this.state.blogList.filter((temp)=>temp.id!==id)
    })}).catch((err)=>{alert("veri silmede hata var")});
  }

  view(id) {
    alert(id);
    //this.props.history.push("/blog/view/" + id);
    this.props.history.push(`/blog/view/${id}`);
    window.open("/blog/view/" + id);
  }

  render() {
    //object destructing
    const { t } = this.props;
    const { blogList } = this.state;
    return (
      <div>
        <h1 className="text-center display-4 text-uppercase mt-5">{t('blog_list')}</h1>
        <Link to="/blog/create" className="btn btn-primary ms-2"><i className="fa-solid fa-plus"></i> {t('blog_create')}</Link>
        <button className="btn btn-danger ms-2">
          <i className="fa-solid fa-trash"></i> {t('blog_all_delete')}
        </button>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>{t("blog_id")}</th>
              <th>{t("blog_header")}</th>
              <th>{t("blog_content")}</th>
              <th>{t("date")}</th>
              <th>{t("update")}</th>
              <th>{t("view")}</th>
              <th>{t("delete")}</th>
            </tr>
          </thead>
          <tbody>
            {
              blogList.map((temp) => {
                <tr key={temp.id}>
                  <td>{temp.header}</td>
                  <td>{temp.content}</td>
                  <td>{temp.systemDate}</td>
                  <td>
                    <i
                      className="fa-solid fa-pen-nib text-primary text-center"
                      style={{ cursor: "pointer" }}
                      onClick={() => this.update(temp.id)}
                    ></i>
                  </td>
                  <td>
                    <Link to={`/blog/view/${temp.id}`}>
                  
                    <i
                      className="fa-solid fa-binoculars text-warning text-center"
                      style={{ cursor: "pointer" }}
                      onClick={() => this.view(temp.id)}
                    ></i>
                      </Link>
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-trash text-danger text-center"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        if (window.confirm("Are you sure?")) {
                          this.delete(temp.id);
                        } else {
                          window.alert("You canceled the operation");
                        }
                      }}
                    ></i>
                  </td>
                </tr>;
              }) //end map
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default withTranslation()(BlogList);
