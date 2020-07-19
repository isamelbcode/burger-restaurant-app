import React, { Component } from "react";
import Header from "./Header";
import logo from "../../images/logo.png";
import stamp from "../../images/stamp.png";
import wlogo from "./whatsappgr.png";

class CoverImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavStatus: false,
    };
    this.toggleSideNav = this.toggleSideNav.bind(this);
  }

  toggleSideNav() {
    const currentStatus = this.state.sideNavStatus;
    this.setState({ sideNavStatus: !currentStatus });
  }

  render() {
    const { handlePageChange } = this.props;

    return (
      <div>
        <nav className="navbar navbar-default bootsnav no-background navbar-fixed black">
          <div className="container">
            <div className="attr-nav"></div>
            <div className="navbar-header">
              <img src={logo} className="logo" alt="" />
              <label id="test1"> </label>
              <label id="test1"> </label>
              <label id="test1"> </label>
              <label id="test1"> </label>
              <label id="test1"> </label>
              <label id="test1"> </label>
              <label id="test1"> </label>
              <label id="test1"> </label>
              <label id="test1"> </label>
              <label id="test1"> </label>
              <label id="test1"> </label>
              <label id="test1"> </label>
              <label id="test1"> </label>
              <label id="test1"> </label>
              <label id="test1"> </label>
              <a href="https://wa.me/447376121241">
                <img
                  id="hard"
                  src={wlogo}
                  alt="whatsapp icon"
                  width="50"
                  height="50"
                />
              </a>
            </div>
          </div>
        </nav>
        <Header
          // title={"fatty"}
          imgUrl={stamp}
          handlePageChange={handlePageChange}
        >
          FIRST AVENUE GRILLS
          
        </Header>
      </div>
    );
  }
}

export default CoverImage;
