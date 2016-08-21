import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      other: "Hi",
    };
  }
  //changeTitle(title,other) {
  changeTitle(title) {
    console.log(this.state.title);
    this.setState({title});//transform el string a object segun la llave del nombre variable
    //this.setState({title,other});
    //console.log(this.state.other);
  }
  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
