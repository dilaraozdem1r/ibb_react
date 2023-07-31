// rcc
import React, { Component } from "react";
import { withTranslation } from "react-i18next"; // or any other package where 'withTranslation' is defined
import Header from "./component/blog/Header";
import Main from "./component/blog/Main";
import Footer from "./component/blog/Footer";

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
        <Header />
        <br />
        <Main />
        <br />
        <Footer />
      </React.Fragment>
    ); //end return
  } //end render
} //end class

//Higher Order Component - HOC
export default withTranslation()(RouterBlog);

//rfc
// import React from 'react'

// export default function RouterBlog() {
//   return (
//     <div>RouterBlog</div>
//   )
// }
