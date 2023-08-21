import React, { Component } from "react";
import cardPicture from "../../assist/img/resim.jpg";
import BlogApi from "../../services/BlogApi.js";
import { withTranslation } from "react-i18next";

class BlogView extends Component {
  static displayName = "Blog_View";

  constructor(props) {
    super(props);
    this.state = {
      //id:this.props.match.params.id
      id: 4,
      registerDto: {},
    };
  }
  //CDM
  componentDidMount() {
    BlogApi.blogServiceFindById(this.state.id)
      .then((response) => {
        console.log(response);
        this.setState({
          registerDto: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //RENDER
  render() {
    const {t}=this.props;
    const {id,header}=this.state.registerDto;
    //RETURN
    return (
      <React.Fragment>
        BlogView
        <div className="card">
          <img src={cardPicture} className="card-img-top" alt="..." />
          <div className="card-body mx-auto">
            <h4 className="card-title">{t("blog_id")} {this.state.id} Lorem ipsum dolor sit amet.</h4>
            <p className="card-text">
              <b>{t("blog_header")}</b> {header}
            </p>
            <p className="card-text">
              <b>
                <mark>{t("blog_content")}</mark>
              </b>{" "}
              {this.state.registerDto.content}
            </p>
            <p className="card-text" style={{fontWeight:"bold"}}>
              <i>{t("date")}</i> <q>{this.state.registerDto.date}</q>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withTranslation()(BlogView);
