import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import BlogApi from "../../services/BlogApi.js";
import ReusabilityBlogInput from "./ReusabilityBlogInput.jsx";

class BlogCreate extends Component {
  //displayName
  static displayName = "Blog_Create";

  //constructor
  constructor(props) {
    super(props);

    //STATE
    this.state = {
      header: null,
      content: null,
      blogDto: {}, //object
      isRead: false, //sözleşme kuralları
      spinnerData: false, //spinner
      multipleRequest: false, //çoklu isteklere izin verme
      validationErrors:{} //backendden gelen veriler
    };

    //BIND
    this.onChangeInputValue = this.onChangeInputValue.bind(this);
    this.onChangeIsRead = this.onChangeIsRead.bind(this);
    this.createSubmit = this.createSubmit.bind(this);
  }

  //Function
  onChangeIsRead = (event) => {
    console.log(event.target.checked);
    this.setState({
      isRead: event.target.checked,
    });
  };

  resetDatas = () => {
    this.setState({
      header: null,
      content: null,
      blogDto: {},
      isRead: false,
      spinnerData: false, //spinner
      multipleRequest: false, //çoklu isteklere izin verme
    });
  };

  //ONCHANGE
  onChangeInputValue = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);

    //backendden gelen hataları yakalamak için
    const backendErrorHandling={...this.state.validationErrors};
    console.log(backendErrorHandling);
    backendErrorHandling[name]=undefined;

    this.setState({
      [name]: value,
      backendErrorHandling,
    });

  };

  //SUBMIT
  createSubmit = async (event) => {
    event.preventDefault();
    const { header, content } = this.state;
    const blogDto = { header, content };
    console.log(blogDto);
    localStorage.setItem("header", header);
    localStorage.setItem("content", content);

    //1.YOL
    // BlogApi.blogServiceCreate(blogDto).then((response)=>{
    //   if(response.status===200){
    //     alert("blog başarıyla eklendi");
    //     this.resetDatas();
    //   }
    // }).catch((err)=>{alert("blog eklenirken hata var")});//end blogServiceCreate

    //2.YOL (async-await)
    try {
      //SPINNER
      this.setState({ spinnerData: true, multipleRequest: true });
      const response = await BlogApi.blogServiceCreate(blogDto);
      if (response.status === 200) {
        alert("blog başarıyla eklendi");
        this.setState({ spinnerData: false, multipleRequest: false });
        this.resetDatas();
      }
    } catch(err) {
      this.setState({ spinnerData: true, multipleRequest: true });
      alert("blog eklenirken hata var");
      if(err.response.data.validationErros){
        this.setState({validationErrors:err.response.data.validationErros});
      }
    }//end try-catch
  };

  render() {
    const { t } = this.props;
    const { isRead,validationErrors } = this.state;
    return (
      <React.Fragment>
        <h1 className="text-center display-4 text-uppercase mt-5">
          {t("blog_create")}
        </h1>
        <form>
          {/* <div className="form-group mb-4">
            <span>{t("blog_header")}</span>
            <input
              type="text"
              className="form-control"
              id="header"
              name="header"
              placeholder={t("blog_header")}
              required={true}
              onChange={this.onChangeInputValue}
            />
          </div> */}
          <ReusabilityBlogInput
            type="text"
            classNameProps="form-control"
            id="header"
            name="header"
            placeholder={t("blog_header")}
            required={true}
            onChange={this.onChangeInputValue}
            errors={validationErrors.header}
          />


          <div className="form-group mb-4">
            <span>{t("blog_content")}</span>
            <textarea
              rows="3"
              type="text"
              className="form-control"
              id="content"
              name="content"
              placeholder={t("blog_content")}
              required={true}
              onChange={this.onChangeInputValue}
            />
            <span className="text-danger">{validationErrors.content}</span>
          </div>
          {/*submit*/}

          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              onChange={this.onChangeIsRead}
            />
            <label htmlFor="" className="form-check-label">
              {t("are_you_read_deal")}
            </label>
          </div>
          <button
            className="btn btn-danger mb-5 me-3"
            onClick={this.resetDatas}
          >
            {t("reset")}
          </button>

          <button
            type="submit"
            className="btn btn-primary mb-5"
            disabled={!isRead && this.state.multipleRequest}
            onClick={this.createSubmit}
          >
            {this.state.spinnerData && (
              <span className="spinner-border text-warning"></span>
            )}{" "}
            {t("submit")}{" "}
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default withTranslation()(BlogCreate);
