import React from 'react'
import mail from '../assets/svg/mail.svg'
import telegram from "../assets/svg/telegram.svg";
import section6_1 from "../assets/png/section6left.png"
import section6_2 from "../assets/png/section6_right.png"
import { Link } from 'react-router-dom';
const Section6 = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="2000"
      className="pb_82 box_6 position-relative my-5"
    >
      <img className="telegram" src={telegram} alt="telegram" />
      <h2 className="ff-poppins fs_33 fw_600 fc_off_black mb-0 text-center pb_74 pt_80 section6_para1">
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </h2>
      <div className="d-flex flex-wrap  justify-content-center position-relative">
        <img className="section6_1 w-50 " src={section6_1} alt="section6_1" />
        <img className="section6_2 w-25 " src={section6_2} alt="section6_2" />
        <div className="mail_box mt-3">
          <Link>
            <img src={mail} alt="mail" />
          </Link>
          <input
            className="ff-montserrat fs_14 fw_400 fc_blue2 your_mail ms-3 mb-0 d-inline block"
            type="email"
            placeholder=" Your email"
            name="email"
          />
        </div>
        <Link className="ff-open-sans mt-3 fs_17 fw_600 fc_white subscribe_btn d-inline-block mb-0 ms-3">
          Subscribe
        </Link>
      </div>
    </div>
  );
}

export default Section6
