import React, { Component } from "react";
import { withTranslation } from "react-i18next";

 class BlogCreate extends Component {
  render() {
    const { t } = this.props;
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
              id=""
              name=""
              placeholder={t("blog_header")}
              required={true}
              focus={true}
            />
          </div>

          <div className="form-group mb-4">
            <span>{t("blog_content")}</span>
            <textarea
              rows="3"
              type="text"
              className="form-control"
              id=""
              name=""
              placeholder={t("blog_content")}
              required={true}
              focus={true}
            />
          </div>
          <button className="btn btn-primary mt-3">{t('submit')}</button>
        </form>
      </React.Fragment>
    );
  }
}


export default withTranslation()(BlogCreate);