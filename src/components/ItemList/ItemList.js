import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class ItemList extends Component {
  render() {
    const { item } = this.props;
    const { user } = this.props;
    // console.log("props", this.props);
    // console.log("userLoggedIn booloan", this.props.userLoggedIn === true);

    return (
      <div>
        {/* {!this.props.userLoggedIn && <LoginFormContainer />}
        {!this.props.userLoggedIn && <SignUpFormContainer />}
        {this.props.userLoggedIn && <CreateFormContainer />} */}

        {!items && "Loading..."}
        {items && (
          <div>
            {items.map((item, index) => (
              <Card className="item-card" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>Description: {item.description}</Card.Text>
                  <Card.Text>Price: {item.price}</Card.Text>
                  {/* <Link to={`events/${event.id}`}> */}
                  <Button variant="primary">View Details</Button>
                  {/* </Link> */}
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
}