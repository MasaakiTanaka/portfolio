import React, { Component } from "react";
import { Icon } from "@iconify/react";
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from "@iconify/icons-logos/react";
import cSharp from '@iconify/icons-logos/c-sharp';

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic1 = "images/" + this.props.sharedBasicInfo.image1;
      var profilepic2 = "images/" + this.props.sharedBasicInfo.image2;
      var profilepic3 = "images/" + this.props.sharedBasicInfo.image3;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="260px"
                    width="220px"
                    src={profilepic1}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={javascriptIcon}
                    style={{ fontSize: "400%", margin: "5% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "5% 5% 0 5%" }}
                  />
                  <Icon
                    icon={cSharp}
                    style={{ fontSize: "400%", margin: "5% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>
            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
                <div className="polaroid">
                  <span style={{ cursor: "auto" }}>
                    <img
                      src={profilepic2}
                      alt="tennis"
                    />
                  </span>
                  <span style={{ cursor: "auto" }} className="traveling">
                    <img
                      height="200px"
                      src={profilepic3}
                      alt="traveling"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
