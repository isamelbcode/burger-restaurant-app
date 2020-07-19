import React, { Component } from "react";
import CoverImage from "./CoverImage";
import Menu from "./Menu";
import { imagesLoaded } from "../../constants/ImagesLoaded";
import Splash from "./Splash";
import { BottomTabs } from "./BottomTabs";
import { Tagline } from "./Tagline";
import { orderForm } from "./orderForm";

import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoading: true,
    };
    this.renderSplash = this.renderSplash.bind(this);
    this.timer = setTimeout(this.renderSplash, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handlePageChange = () => {
    this.setState({
      imageLoading: !imagesLoaded(this.homeElement),
    });
  };

  renderSplash() {
    this.setState({
      imageLoading: false,
    });
  }

  render() {
    const { imageLoading } = this.state;
    return (
      <div
        className="home"
        ref={(element) => {
          this.homeElement = element;
        }}
      >
        {imageLoading && <Splash />}
        <CoverImage handlePageChange={this.handlePageChange} />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        
        <h3 align={"center"} style={{ color: "black" }}>
          a fresh video every week
        </h3>
        <h3 align={"center"} style={{ color: "black" }}>
          Watch us prepare our food
        </h3>
        <br />
        <p className="test" align={"center"}>
          {" "}
          <div className="fb-video" data-href="https://www.facebook.com/100038509461244/videos/209802473646733/"  
                allowfullscreen="true" data-width="300"></div>
          {" "}
        </p>
        <section id="block">
          <Menu />

          <div className="container">
            <BottomTabs />
          </div>
        </section>
        <Tagline />
        <orderForm />
      </div>
    );
  }
}

export default Home;
