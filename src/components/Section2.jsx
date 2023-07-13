import React from "react";
import rome1 from "../assets/png/rome1.png";
import rome2 from "../assets/png/rome2.png";
import rome3 from "../assets/png/rome3.png";

import rome_arrow from "../assets/svg/rome_arrow.svg";
import { Col, Row } from "react-bootstrap";
const Section2 = () => {
  return (
    <div className="py-5">
      <h2 className="ff-poppins fs_18 fw_600 fc_off_black text-center  mb-0">
        Top Selling
      </h2>
      <h2 className="ff-Volkhov fs_50 fw_700 fc_blue text-center mb-0 pt-2 pb-5">
        Top Destinations
      </h2>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} lg={4}
          data-aos="flip-left" data-aos-duration="2000"
         
          className=" positon-relative  cp"
        >
          <div className="rome_box cursor-pointer">
            <div className="overflow-hidden rome_image ">
              <img className="w-100 imagee" src={rome1} alt="rome1" />
            </div>
            <div className="white_box1 ">
              <div className="d-flex align-items-center justify-content-between">
                <h2 className="ff-poppins fs_18 fc_off_black fw_500 mb-0">
                  Rome, Italty
                </h2>
                <h2 className="ff-poppins fs_18 fc_off_black fw_500  mb-0">
                  $5,42k
                </h2>
              </div>
              <div className="d-flex align-items-center pt-3">
                <img src={rome_arrow} alt="rome_arrow" />
                <h2 className="ff-poppins fs_16 fc_off_black fw_500 mb-0 ps-3">
                  10 Days Trip
                </h2>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} lg={4}
          data-aos="flip-left" data-aos-duration="2000"
         
          className=" positon-relative cp"
        >
          <div className="rome_box cursor-pointer">
            <div className="overflow-hidden rome_image ">
              <img className="w-100 imagee" src={rome2} alt="rome2" />
            </div>
          </div>
          <div className="white_box1 ">
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="ff-poppins fs_18 fc_off_black fw_500 mb-0">
                London, UK
              </h2>
              <h2 className="ff-poppins fs_18 fc_off_black fw_500  mb-0">
                $4.2k
              </h2>
            </div>
            <div className="d-flex align-items-center pt-3">
              <img src={rome_arrow} alt="rome_arrow" />
              <h2 className="ff-poppins fs_16 fc_off_black fw_500 mb-0 ps-3">
                12 Days Trip
              </h2>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} lg={4}
          data-aos="flip-left" data-aos-duration="2000"
         
          className=" positon-relative cp"
        >
          <div className="rome_box cursor-pointer">
            <div className="overflow-hidden rome_image ">
              <img className="w-100 imagee" src={rome3} alt="rome3" />
            </div>
          </div>
          <div className="white_box1 ">
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="ff-poppins fs_18 fc_off_black fw_500 mb-0">
                Full Europe
              </h2>
              <h2 className="ff-poppins fs_18 fc_off_black fw_500  mb-0">
                $15k
              </h2>
            </div>
            <div className="d-flex align-items-center pt-3">
              <img src={rome_arrow} alt="rome_arrow" />
              <h2 className="ff-poppins fs_16 fc_off_black fw_500 mb-0 ps-3">
                28 Days Trip
              </h2>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section2;
