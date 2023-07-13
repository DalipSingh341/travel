import React from 'react'

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import play from '../assets/svg/Play_button.svg'
import girl from '../assets/png/Section1_girl_image.png'
import plane1 from '../assets/svg/plane1.svg'
import plane2 from '../assets/svg/plane2.svg'
import red_line from '../assets/svg/enjoy_line.svg'
import { Container } from "react-bootstrap";

const Hero_section = () => {
  
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <Container className="pt-3 pb-5 ">
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center  ">
        <div data-aos="fade-right" data-aos-duration="3000" data-aos-delay="100" className="pt-5 order-lg-first order-last">
          <h2 className="ff-poppins fc_orange fs_20 fw_700 mb-0 pb-4">
            Best Destinations around the world
          </h2>
          <div className=" position-relative">
            <h2 className="ff-Volkhov fc_blue fs_84 fw_700 mb-0 pb_30 text_1">
              Travel, enjoy and live a new and full life
            </h2>
            <img className="red_line" src={red_line} alt="red_line" />
          </div>
          <p className="ff-poppins fc_off_black fs_16 fw_500 section_para1  mb-0 pb_34">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <a
              className="ff-google-sans fc_white fw_18 fw_500 mb-0 find_out d-inline-block  mt-2 find_out1"
              href="find_out"
            >
              Find out more
            </a>
            <div className="ff-poppins  d-inline-block fc_off_black fs_17 fw_500 ml_44p mt-2">
              <img className="me-4 play_btn cp" src={play} alt="play_btn" />

              <Button
                className="ff-poppins  d-inline-block fc_off_black fs_17 fw_500 mt-2"
                variant="primary"
                onClick={handleShow}
                Play
                Demo
              >
                Play Demo
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <h2>Amazon</h2>
                </Modal.Header>
                <Modal.Body>
                  You Can Start now
                  <iframe
                    width="450"
                    height="315"
                    src="https://www.youtube.com/embed/yN9t3Myv97c"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    className="ff-bold fc_black"
                    variant="primary"
                    onClick={handleClose}
                  >
                    play
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/yN9t3Myv97c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
          </div>
        </div>
        <div
          data-aos="fade-left" data-aos-duration="3000" data-aos-delay="100"
          className="position-relative order-first order-lg-last"
        >
          <img className="plane1" src={plane1} alt="plane1" />
          <img className="plane2" src={plane2} alt="plane2" />
          <img className="w-100 girl_image " src={girl} alt="girl" />
        </div>
      </div>
    </Container>
  );
}

export default Hero_section
