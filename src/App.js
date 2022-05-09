import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import MeNu from "./components/MenuComponent";
import { DISHES } from "./components/share/dishes";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="primary">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        <MeNu dishes={this.state.dishes}></MeNu>
      </div>
    );
  }
}

export default App;
