// rcc
import React, { Component } from "react";
import { withTranslation } from "react-i18next"; // or any other package where 'withTranslation' is defined

//ROUTER
import { Route, Routes,Navigate } from "react-router-dom";

//HEADER, FOOTER
import Header from "./component/Header";
import Footer from "./component/Footer";

//COMPONENT CRUD
import BlogList from "./component/blog/BlogList";
import BlogUpdate from "./component/blog/BlogUpdate";
import BlogView from "./component/blog/BlogView";
import BlogCreate from "./component/blog/BlogCreate";
import Main from "./component/Main";

//CLASS
class RouterBlog extends Component {
  //displayName
  static displayName = "RouterBlog";

  //constructor
  constructor(props) {
    super(props);

    //STATE
    this.state = {};

    //BIND
  }

  //CDM

  //Function

  //render
  render() {
    return (
      <React.Fragment>
        {/* HEADER */}
        <Header logo="fa-solid fa-blog" />
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            {/* Blog Crud */}
            <Route path="/blog/list" element={<BlogList />} />
            <Route path="/blog/create" element={<BlogCreate />} />
            <Route path="/blog/view/:id" element={<BlogView />} />
            <Route path="/blog/update/:id" element={<BlogUpdate />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        {/* FOOTER */}
        <Footer copy=" © 2021 -2023 Copyright: " />
      </React.Fragment>
    ); //end return
  } //end render
} //end class

//Higher Order Component - HOC
export default withTranslation()(RouterBlog);
