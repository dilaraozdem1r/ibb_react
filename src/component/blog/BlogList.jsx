import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import BlogApi from "../../services/BlogApi.js";
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
    this.create = this.create.bind(this);
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
  create() {
    alert("create success");
  }

  update(id) {
    alert(id);
  }

  delete(id) {
    alert(id);
  }

  view(id) {
    alert(id);
  }

  render() {
    //object destructing
    const { t } = this.props;
    const { blogList } = this.state;
    return (
      <div>
        <h1 className="text-center display-4 text-uppercase mt-5">blog list</h1>
        <button className="btn btn-primary" onClick={this.create}>
          <i className="fa-solid fa-plus"></i> Blog Create
        </button>
        <button className="btn btn-danger ms-2">
          <i className="fa-solid fa-trash"></i> blog all delete
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
                    <i
                      className="fa-solid fa-binoculars text-warning text-center"
                      style={{ cursor: "pointer" }}
                      onClick={() => this.view(temp.id)}
                    ></i>
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
