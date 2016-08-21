import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    console.log(title);
    this.props.changeTitle(title);//response
    //this.props.changeTitle(title,title);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
