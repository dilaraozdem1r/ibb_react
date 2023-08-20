import React, { Component } from "react";
import { withTranslation } from "react-i18next";

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
  }

  //Function
  onChangeIsRead = (event) => {
    console.log(event.target.checked);
    this.setState({
      isRead: event.target.checked,
    });
  };

  resetDatas=()=>{
    this.setState({
      header:null,
      content:null,
      blogDto:{},
      isRead:false
    });
  }

  onChangeInputValue = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { t } = this.props;
    const { isRead} = this.state;
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
          <button className="btn btn-danger mb-5 me-3" onClick={this.resetDatas} >{t("reset")}</button>

          <button className="btn btn-primary mb-5" disabled={!isRead}>{t("submit")}</button>
        </form>
      </React.Fragment>
    );
  }
}

export default withTranslation()(BlogCreate);
