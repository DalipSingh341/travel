import React from "react";
import easy1 from "../assets/svg/easy_step1.svg";
import easy2 from "../assets/svg/easy_step2.svg";
import easy3 from "../assets/svg/easy_step3.svg";
import building from "../assets/svg/building.svg";
import trip_box from "../assets/svg/section3_card_image.svg"
import girl2 from "../assets/png/section3_image1.png";
import blue_gradient from "../assets/png/blue_graidient.png";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <div>
      <Row className=" align-items-center justify-content-between ">
        <Col
          xs={12}
          md={6}
          data-aos="flip-left"
          data-aos-duration="2000"
          className=" pt-3"
        >
          <h2 className="ff-poppins fw_600  fs_18 fc_off_black mb-0">
            Easy and Fast
          </h2>
          <h2 className="ff-Volkhov fs_50 fw_700 fc_blue mb-0  pt-3 pb_30">
            Book Your Next Trip In 3 Easy Steps
          </h2>
          <div className="d-flex pb-5 ">
            <div>
              <img src={easy1} alt="easy1" />
            </div>
            <div className="ms-4">
              <h2 className="ff-poppins fs_16 fw_700  fc_off_black mb-0">
                Choose Destination
              </h2>
              <p className="ff-poppins fs_16 fw_400  fc_off_black mb-0 pt-1 section3_para1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="d-flex pb-5">
            <div>
              <img src={easy2} alt="easy2" />
            </div>
            <div className="ms-4">
              <h2 className="ff-poppins fs_16 fw_700  fc_off_black mb-0">
                Make Payment
              </h2>
              <p className="ff-poppins fs_16 fw_400  fc_off_black mb-0 pt-1 section3_para1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="d-flex ">
            <div>
              <img src={easy3} alt="easy3" />
            </div>
            <div className="ms-4">
              <h2 className="ff-poppins fs_16 fw_700  fc_off_black mb-0">
                Reach Airport on Selected Date
              </h2>
              <p className="ff-poppins fs_16 fw_400  fc_off_black mb-0 pt-1 section3_para1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          data-aos="flip-left"
          data-aos-duration="2000"
          className="position-relative pt-3"
        >
          <div className="blue_gradient">
            <div className="blue_circle"></div>
          </div>

          <div className="white_box2 position-relative">
            <img className="trip_box" src={trip_box} alt="trip_box" />
            <div className="overflow-hidden girl2 pb-4">
              <img className="girl2" src={girl2} alt="girl2" />
            </div>
            <h2 className="ff-poppins fs_18 fw_500  fc_main_black mb-0 ">
              Trip To Greece
            </h2>
            <div className="d-flex pt-3">
              <h2 className="ff-poppins fs_16 fw_500  fc_off_black mb-0 ">
                14-29 June
              </h2>
              <div className="gray_line ms-2"></div>
              <h2 className="ff-poppins fs_16 fw_500  fc_off_black mb-0 ps-3">
                by Robbin joseph
              </h2>
            </div>
            <div className="d-flex gap-3 pt-3 pb_30">
              <Link className="leaf">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="18" r="18" fill="#F5F5F5" />
                  <g clip-path="url(#clip0_1722_793)">
                    <path
                      d="M24.6547 12.1508C24.2859 12.0429 15.2628 11.1445 12.094 15.4257C10.6905 17.3222 10.6695 19.9221 12.0236 23.1525C11.6801 23.8655 11.3794 24.6166 11.1343 25.4091C11.0598 25.6499 11.1946 25.9052 11.4351 25.9795C11.48 25.9934 11.5254 26 11.5702 26C11.7647 26 11.9453 25.8744 12.0055 25.6787C14.4207 17.8703 22.2697 14.0927 24.6766 13.1383C24.9108 13.0454 25.2239 12.3174 24.6547 12.1508Z"
                      fill="#84829A"
                    />
                    <path
                      d="M13.4717 24.1296C14.7781 24.6777 16.0843 24.9586 17.299 24.9586C18.3908 24.9586 19.409 24.7341 20.2864 24.2789C22.0522 23.3629 23.1313 21.6107 23.4068 19.2112C23.6876 16.7658 24.0371 15.234 24.3286 14.297C21.7333 15.4942 16.1685 18.5973 13.4717 24.1296Z"
                      fill="#84829A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1722_793">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(11 12)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link className="leaf">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="18" r="18" fill="#F5F5F5" />
                  <g clip-path="url(#clip0_1722_807)">
                    <path
                      d="M23.501 11C23.4233 11 23.3467 11.018 23.2773 11.0527L19.4883 12.9477L15.2039 11.0432C15.1969 11.0403 15.1889 11.0397 15.1814 11.0367C15.1621 11.0295 15.1424 11.0235 15.1224 11.0187C15.1025 11.0134 15.0823 11.0092 15.0619 11.0062C15.0213 11.0029 14.9805 11.0029 14.9399 11.0062C14.9195 11.0092 14.8993 11.0134 14.8794 11.0187C14.8594 11.0235 14.8397 11.0295 14.8204 11.0367C14.8129 11.0397 14.8049 11.0402 14.7979 11.0432L10.298 13.0432C10.1173 13.1234 10.0009 13.3026 10.001 13.5002V24.5C10.0011 24.6692 10.0866 24.8268 10.2285 24.919C10.3703 25.0114 10.5492 25.0257 10.7039 24.957L15.0009 23.047L19.2978 24.957C19.3053 24.96 19.3133 24.957 19.3208 24.9615C19.4419 25.0157 19.5808 25.0126 19.6993 24.953C19.7073 24.9496 19.7163 24.953 19.7243 24.9475L23.7242 22.9476C23.8937 22.8629 24.0008 22.6896 24.0007 22.5V11.5002C24.0009 11.2241 23.7771 11.0001 23.501 11ZM14.5009 22.1751L11.001 23.7305V13.8252L14.5009 12.2697V22.1751ZM19.0008 23.7305L15.5009 22.1751V12.2697L19.0008 13.8252V23.7305ZM23.0008 22.1911L20.0008 23.691V13.8092L23.0008 12.3092V22.1911Z"
                      fill="#84829A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1722_807">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(10 11)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link className="leaf">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="18" r="18" fill="#F5F5F5" />
                  <path
                    d="M23.3429 13.2425L17.0254 19.5833C16.953 19.5414 16.8768 19.5062 16.7979 19.4783L12.6271 18.0667C12.5009 18.0351 12.389 17.9622 12.309 17.8597C12.229 17.7572 12.1855 17.6309 12.1855 17.5008C12.1855 17.3708 12.229 17.2445 12.309 17.142C12.389 17.0395 12.5009 16.9666 12.6271 16.935L22.9754 13.2542C23.043 13.2312 23.114 13.2194 23.1854 13.2192C23.2388 13.2183 23.292 13.2262 23.3429 13.2425Z"
                    fill="#84829A"
                  />
                  <path
                    d="M23.7461 14.0241L20.0653 24.3841C20.0247 24.5049 19.9457 24.609 19.8404 24.6806C19.735 24.7522 19.6091 24.7874 19.4819 24.7808C19.3533 24.7867 19.2263 24.7498 19.1207 24.6759C19.0152 24.6021 18.9371 24.4954 18.8986 24.3725L17.5103 20.2016C17.4824 20.1227 17.4472 20.0465 17.4053 19.9741L23.7578 13.6566C23.7936 13.7772 23.7895 13.9061 23.7461 14.0241Z"
                    fill="#84829A"
                  />
                </svg>
              </Link>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-3">
                <span className="d-flex align-items-baseline cp">
                  <img src={building} alt="building" />
                </span>
                <h2 className="ff-poppins fs_16 fw_500  fc_off_black mb-0">
                  24 people going
                </h2>
              </div>
              <Link className="heart">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3644 2.45457C17.33 1.34265 15.8804 0.709981 14.3617 0.707636C12.8417 0.709395 11.3906 1.34173 10.3546 2.45386L10.0015 2.82698L9.64836 2.45386C7.59251 0.241198 4.13215 0.114128 1.91953 2.16998C1.82148 2.26112 1.72679 2.35577 1.63565 2.45386C-0.545218 4.80619 -0.545218 8.44162 1.63565 10.794L9.48255 19.069C9.75403 19.3556 10.2064 19.3679 10.493 19.0964C10.5024 19.0875 10.5115 19.0784 10.5204 19.069L18.3645 10.794C20.5452 8.44187 20.5452 4.80665 18.3644 2.45457ZM17.3302 9.80969H17.3294L10.0015 17.5386L2.67282 9.80969C1.00676 8.01229 1.00676 5.23481 2.67282 3.43741C4.1858 1.79757 6.74172 1.69475 8.38156 3.20773C8.46118 3.28119 8.53778 3.35779 8.61124 3.43741L9.48255 4.35663C9.76969 4.64193 10.2333 4.64193 10.5204 4.35663L11.3917 3.43812C12.9047 1.79828 15.4606 1.69546 17.1005 3.20844C17.1801 3.2819 17.2567 3.35851 17.3302 3.43812C19.0107 5.23837 19.023 8.02092 17.3302 9.80969Z"
                    fill="#4152CA"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section3;
