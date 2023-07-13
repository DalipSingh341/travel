import React from 'react'
import Jadoo_logo from '../assets/svg/Jadoo_logo.svg';

import { Container } from "react-bootstrap";

const Jadoo = () => {

  return (
    <nav id="dynamic" className="pt-5 pb-4  ">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <img className="z_index1" src={Jadoo_logo} alt="Jadoo_logo" />
          <label for="iconbox">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <input type="checkbox" id="iconbox" hidden></input>
          <ul className="d-flex mb-0 gap-5 align-items-center lg_screen">
            <li>
              <a
                className="ff-google-sans fs_17 fc_black fw_500 d-inline-block text2_hover  "
                href="Desitnations"
              >
                Desitnations
              </a>
            </li>
            <li>
              <a
                className="ff-google-sans fs_17 fc_black fw_500 d-inline-block text2_hover  "
                href="Hotels"
              >
                Hotels
              </a>
            </li>
            <li>
              <a
                className="ff-google-sans fs_17 fc_black fw_500 d-inline-block text2_hover  "
                href="Flights"
              >
                Flights
              </a>
            </li>
            <li>
              <a
                className="ff-google-sans fs_17 fc_black fw_500 d-inline-block text2_hover"
                href="Bookings"
              >
                Bookings
              </a>
            </li>
            <li>
              <a
                className="ff-google-sans fs_17 fc_black fw_500 d-inline-block text2_hover"
                href="Login"
              >
                Login
              </a>
            </li>
            <li>
              <a
                className="ff-google-sans  fs_17 fc_black fw_500 d-inline-block   sign_up_btn"
                href="Sign up"
              >
                Sign up
              </a>
            </li>
            <select
              name="language"
              id="language"
              className="english  md:d-none "
            >
              <option
                className="ff-google-sans fs_17 fc_black fw_500"
                value="volvo"
              >
                EN
              </option>
              <option
                className="ff-google-sans fs_17 fc_black fw_500"
                value="saab"
              >
                HI
              </option>
              <option
                className="ff-google-sans fs_17 fc_black fw_500"
                value="opel"
              >
                SP
              </option>
              <option
                className="ff-google-sans fs_17 fc_black fw_500"
                value="audi"
              >
                AR
              </option>
            </select>
          </ul>
          <select
            name="language"
            id="language"
            className="english ml-5 d-none md:block "
          >
            <option
              className="ff-google-sans fs_17 fc_black fw_500 "
              value="volvo"
            >
              EN
            </option>
            <option
              className="ff-google-sans fs_17 fc_black fw_500"
              value="saab"
            >
              HI
            </option>
            <option
              className="ff-google-sans fs_17 fc_black fw_500"
              value="opel"
            >
              SP
            </option>
            <option
              className="ff-google-sans fs_17 fc_black fw_500"
              value="audi"
            >
              AR
            </option>
          </select>
        </div>
      </Container>
    </nav>
  );
}

export default Jadoo
