import { Component } from "react";

import "./Card.css";

export default class Card extends Component {
  render() {
    const name = this.props.name;
    return (
      <div className="card-container">
        <img alt={`${this.props.type} ${name}`} src={this.props.imgUrl} />
        <h2>{name}</h2>
        <p>{this.props.email}</p>
      </div>
    );
  }
}
