import React from "react";
import three_balls from "../assets/svg/three_balls.svg";
import top_arrow1 from "../assets/svg/top_arrow.svg"
import top_arrow2 from "../assets/svg/bottom_arrow.svg" 
import boy_smile from "../assets/svg/boy_smile.svg";
import { Col, Row } from "react-bootstrap";
const Section4 = () => {
  return (
    <Row className=" py-5 ">
      <Col
        xs={12}
        md={6}
        data-aos="zoom-in-down"
        data-aos-duration="2000"
        className="pb-5 pt-5"
      >
        <h2 className="ff-poppins fs_18 fw_600 fc_off_black mb-0">
          TESTIMONIALS
        </h2>
        <p className="ff-Volkhov fc_blue fw_700 fs_50 mb-0 section4_para1 pt-2 pb_82">
          What People Say About Us.
        </p>
        <a href="#">
          <img src={three_balls} alt="three_balls" />
        </a>
      </Col>
      <Col
        xs={12}
        md={6}
        data-aos="zoom-in-down"
        data-aos-duration="2000"
        className="d-flex align-items-center position-relative py-5"
      >
        <div className="white_box4  position-relative">
          <img className="boy_smile" src={boy_smile} alt="boy_smile" />
          <p className="ff-poppins fs_16 fw_500 fc_off_black mb-0 pb-2 section4_para2 pt-4">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <h2 className="ff-poppins fs_18 fw_600 fc_off_black  mb-0 pt-4 ">
            Mike taylor
          </h2>
          <h2 className="ff-poppins fs_14 fw_500 fc_off_black  mb-0 pt-1">
            Lahore, Pakistan
          </h2>
        </div>
        <div className="d-flex flex-column gap-5 ms-5 arrows">
          <a href="#">
            <img src={top_arrow1} alt="top_arrow1" />
          </a>
          <a href="#">
            <img src={top_arrow2} alt="top_arrow2" />
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default Section4;
