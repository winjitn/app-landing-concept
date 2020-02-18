import React from "react"
import SEO from "../components/seo"
import { Grid } from "semantic-ui-react"

import "semantic-ui-css/semantic.min.css"

import "./layout.css"

const body = () => {
  const content = [
    {
      img: "location.jpg",
      title1: "Vestibulum quis",
      title2: "nisi sed tellus",
      text:
        "Pellentesque odio felis, imperdiet vitae turpis consequat, euismod pulvinar massa. Donec elementum erat et augue tincidunt suscipit.",
      icon: "time.svg",
    },
    {
      img: "hotel.jpg",
      title1: "Nunc at diam",
      title2: "quis neque",
      text:
        "Vestibulum sagittis, sem eget varius ultrices, lorem ligula mollis nulla, ac tincidunt elit mi eu nibh. Suspendisse rhoncus aliquet tristique. ",
      icon: "sale.svg",
    },
    {
      img: "service.jpg",
      title1: "Sed pellentesque",
      title2: "vitae commodo nisi",
      text:
        "Maecenas porttitor magna ac mi tempus, in lacinia augue consectetur. Maecenas imperdiet eros lacus, vitae dictum lacus volutpat id.",
      icon: "support.svg",
    },
  ]

  return content.map((content, i) => {
    const textinner = (
      <>
        <img
          src={require("../images/" + content.icon)}
          alt="icon"
          className="body-icon"
        />
        <div className="body-item-text-1">{content.title1}</div>
        <div className="body-item-text-2">{content.title2}</div>
        <div className="body-item-text-3">{content.text}</div>
      </>
    )
    const imgctn = (
      <Grid.Column key={content.img} mobile={16} computer={8} tablet={8}>
        <div className="body-item">
          <img
            src={require("../images/" + content.img)}
            alt="img"
            className="body-img"
          />
        </div>
        <div className="body-item-text res">{textinner}</div>
      </Grid.Column>
    )
    const textctn = (
      <Grid.Column key={content.icon} mobile={16} computer={8} tablet={8}>
        <div className="body-item-text collapse">{textinner}</div>
      </Grid.Column>
    )
    return (
      <Grid key={content.title1}>
        {i % 2 === 0 ? [imgctn, textctn] : [textctn, imgctn]}
      </Grid>
    )
  })
}

class App extends React.Component {
  count = 0
  ctn = React.createRef()

  load() {
    this.count++
    if (this.count >= 10) {
      this.ctn.current.style.opacity = "1"
    }
  }
  render() {
    return (
      <div ref={this.ctn} id="main-ctn" onLoad={() => this.load()}>
        <SEO title="Home" />
        <div id="banner-ctn">
          <div id="banner-inner-ctn" className="ui container">
            <nav id="nav-bar">
              <div id="name">Name</div>
              <ul id="nav-list">
                <li className="list-item active">Home</li>
                <li className="list-item">About us</li>
              </ul>
            </nav>
            <div id="banner-body-wrapper">
              <div id="banner-text-ctn">
                <div id="banner-text-1">
                  Donec tincidunt lacinia ante, eget rhoncus ipsum iaculis sit
                  amet
                </div>
                <div className="banner-text-2">Donec convallis non quam :</div>
                <div className="banner-text-2 list">
                  Etiam pretium ex ut aliquam volutpat
                </div>
                <div className="banner-text-2 list">
                  Phasellus egestas elit lectus, ac scelerisque
                </div>
                <div id="download-wrapper">
                  <div className="download-btn white-bg">
                    <img
                      src={require("../images/apple.svg")}
                      width="35px"
                      height="35px"
                      className="btn-logo"
                      alt="logo"
                    />
                    <div className="download-btn-text">
                      <div className="small black">Download in the</div>
                      <div className="big black">App Store</div>
                    </div>
                  </div>
                  <div className="download-btn no-bg">
                    <img
                      src={require("../images/google.png")}
                      width="35px"
                      height="35px"
                      className="btn-logo"
                      alt="logo"
                    />
                    <div className="download-btn-text">
                      <div className="small">Get it on</div>
                      <div className="big">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                id="banner-img"
                alt="banner"
                src={require("../images/appdummy.png")}
              />
            </div>
          </div>
        </div>
        <div id="body-ctn">{body()}</div>
        <div id="footer">© 2020 Name. All Rights Reserved.</div>
      </div>
    )
  }
}

export default App
