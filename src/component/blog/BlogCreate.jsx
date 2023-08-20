import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import BlogApi from "../../services/BlogApi.js";

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
    };

    //BIND
    this.onChangeInputValue = this.onChangeInputValue.bind(this);
    this.onChangeIsRead = this.onChangeIsRead.bind(this);
    this.createSubmit=this.createSubmit.bind(this);
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
      spinnerData:false, //spinner
    });
  };

  //ONCHANGE
  onChangeInputValue = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //SUBMIT
  createSubmit = async (event) => {
    event.preventDefault();
    const { header, content } = this.state;
    const blogDto = { header, content };
    console.log(blogDto);

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
      this.setState({spinnerData:true})
      const response = await BlogApi.blogServiceCreate(blogDto);
      if (response.status === 200) {
        alert("blog başarıyla eklendi");
        this.setState({spinnerData:false})
        this.resetDatas();
      }
    } catch {
      alert("blog eklenirken hata var");
      this.setState({spinnerData:false})
    }
  };

  render() {
    const { t } = this.props;
    const { isRead } = this.state;
    return (
      <React.Fragment>
        <h1 className="text-center display-4 text-uppercase mt-5">
          {t("blog_create")}
        </h1>
        <form>
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
            />
          </div>

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
            className="btn btn-primary mb-5"
            disabled={!isRead}
            onClick={this.createSubmit}
          >
            {t("submit")}{" "}
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default withTranslation()(BlogCreate);
