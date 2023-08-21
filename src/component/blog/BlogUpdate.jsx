import React, { Component } from "react";
import BlogApi from "../../services/BlogApi";
import { withTranslation } from "react-i18next";

class BlogUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1, //this.props.match.params.id
      header: null,
      content: null,
      systemDate: null,
      blogDto: {},
      spinnerData: false,
      multipleRequest: false,
      validationErrors: {},
    };
  }

  //CDM
  componentDidMount() {
    BlogApi.blogServiceFindById(this.state.id)
      .then((response) => {
        const findMyBlog = response.data;
        console.log(findMyBlog);
        this.setState({
          header: findMyBlog.header,
          content: findMyBlog.content,
          systemDate: findMyBlog.systemDate,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //Function
  onChangeInputValue =  (event) => {
    const { name, value } = event.target;
    const backendErrorHandling = { ...this.state.validationErrors };
    backendErrorHandling[name] = undefined;
    this.setState({
      [name]: value,
      backendErrorHandling,
    });
  };

  updateSubmit =async(event) => {
    event.preventDefault();
    const { header, content } = this.state;
    const blogDto = {
      header,
      content,
    };
    console.log(blogDto);
    try{
      this.setState({
        spinnerData: true,
        multipleRequest: true,
      });

      //update
      const response=await BlogApi.blogServiceUpdate(this.state.id,blogDto);
      if(response.status===200){
        console.log("güncelleme başarılı");
        //SPINNER DONDURMEDEN ONCE
        this.setState({
          spinnerData: false,
          multipleRequest: false,
        });
        //PHP
        this.props.history.push("/blog/list");
      }
    } catch(err){
      console.log(err);
      this.setState({
        //spinnerData: true,
        multipleRequest: true,
      });

      if(err.response.data.validationErrors){
        this.setState({validationErrors:err.response.data.validationErrors});
      }
    }
  };

  static displayName = "Blog_Update";

  render() {
    const { t } = this.props;
    const {validationErrors,multipleRequest} = this.state;
    const { header,content } = validationErrors;

    return (
      <React.Fragment>
        <h1 className="text-primary">UPDATE</h1>
        <div className="form-group mb-4">
          <span>{t("blog_header")}</span>
          <input
            type="text"
            className="form-control"
            id="header"
            name="header"
            placeholder={t("blog_header")}
            required={true}
            onChange={this.onChangeInputValue}
            value={this.state.header}
          />
          <span className="text-danger">{validationErrors.content}</span>
        </div>
        <div className="form-group mb-4">
          <span>{t("blog_conten")}</span>
          <input
            type="text"
            className="form-control"
            id="content"
            name="content"
            placeholder={t("blog_content")}
            required={true}
            onChange={this.onChangeInputValue}
            value={this.state.content}
          />
          <span className="text-danger">{validationErrors.content}</span>
        </div>

        <button
          type="submit"
          className="btn btn-primary mb-5"
          disabled={this.state.multipleRequest}
          onClick={this.updateSubmit}
        >
          {this.state.spinnerData && (
            <span className="spinner-border text-warning"></span>
          )}{" "}
          {t("submit")}{" "}
        </button>
      </React.Fragment>
    );
  }
}

export default withTranslation()(BlogUpdate);
