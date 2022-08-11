import { Component } from "react";
import Card from "../Card/Card";

import "./CarList.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;

          return (
            <Card
              key={id}
              name={name}
              email={email}
              type="monster"
              imgUrl={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
