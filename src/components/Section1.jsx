import React from "react";
import whether1 from "../assets/svg/whether1.svg";
import whether2 from "../assets/png/plane2.png";
import whether3 from "../assets/svg/whether3.svg";
import whether4 from "../assets/svg/whether4.svg";
import orange_box from "../assets/svg/orange_box_image.svg";
import { Col, Row } from "react-bootstrap";
const Section1 = () => {
  return (
    <div className="pt-5">
      {/* <div className="nav_baar text-end">
        <a className="mb-0 d-inline-block back_top fc_white" href="#">
          ^
        </a>
      </div> */}
      <h2 className="ff-poppins fs_18 fw_600 fc_off_black text-center  mb-0">
        CATEGORY
      </h2>
      <h2 className="ff-Volkhov fs_50 fw_700 fc_blue text-center mb-0 pt-2 pb-5">
        We Offer Best Services
      </h2>
      <Row className=" py-5">
        <Col
          xs={12}
          sm={6}
          lg={3}
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          className="position-relative  pt-3   "
        >
          <div className="white_box d-flex flex-column align-items-center">
            <img className="orange_box" src={orange_box} alt="orange_box" />
            <img src={whether1} alt="whether1" />
            <h2 className="ff-open-sans fs_20 fw_600 fc_blue mb-0 pt_40">
              Calculated Weather
            </h2>
            <p className="ff-poppins fc_off_black fs_16 fw_500 mb-0 pt-3 section1_para1">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={3}
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          className=" position-relative pt-3  "
        >
          <div className="white_box d-flex flex-column align-items-center">
            <img className="orange_box" src={orange_box} alt="orange_box" />
            <img src={whether2} alt="whether2" />
            <h2 className="ff-open-sans fs_20 fw_600 fc_blue mb-0 pt_30">
              Calculated Weather
            </h2>
            <p className="ff-poppins fc_off_black fs_16 fw_500 mb-0 pt-3 section1_para1">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={3}
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          className=" position-relative  pt-3   "
        >
          <div className="white_box d-flex flex-column align-items-center">
            <img className="orange_box" src={orange_box} alt="orange_box" />
            <img src={whether3} alt="whether3" />
            <h2 className="ff-open-sans fs_20 fw_600 fc_blue mb-0 pt_40">
              Calculated Weather
            </h2>
            <p className="ff-poppins fc_off_black fs_16 fw_500 mb-0 pt-3 section1_para1">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={3}
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          className=" position-relative pt-3  "
        >
          <div className="white_box d-flex flex-column align-items-center">
            <img className="orange_box" src={orange_box} alt="orange_box" />
            <img src={whether4} alt="whether4" />
            <h2 className="ff-open-sans fs_20 fw_600 fc_blue mb-0 pt_50">
              Calculated Weather
            </h2>
            <p className="ff-poppins fc_off_black fs_16 fw_500 mb-0 pt-3 section1_para1">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section1;
