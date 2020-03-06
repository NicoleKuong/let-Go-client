import React from "react";
import { getItem } from "../../actions/item";
import { connect } from "react-redux";
import ItemList from "./ItemList";
// import "./ItemList.css";

class ItemListContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(getItems());
  }
  render() {
    return (
      <div>
        {/* <p className="notice">
          please LOGIN to create an event or SIGNUP to create an account
        </p>
        <br /> */}
        <ItemList items={this.props.items} user={this.props.user} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN itemList", state);
  return {
    user: state.user,
    items: state.items
  };
};

export default connect(mapStateToProps)(ItemListContainer);