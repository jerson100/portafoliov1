import {
  BannerContainerStyle,
  BannerContentStyle,
  BannerImageStyle,
  BannerInfoStyle,
} from "./banner.style";

import jersonMobile from "../../../assets/img/png/jerson_mobile.png";
import bgMobile from "../../../assets/img/svgs/arc_mobile.svg";

const Banner = () => {
  return (
    <BannerContainerStyle img={bgMobile}>
      {/* <Arc /> */}
      <BannerContentStyle>
        <BannerInfoStyle>
          <p>
            <span>Howdy,</span> I'm
          </p>
          <h1>Jerson Ramírez</h1>
          <p>Frontend Developer</p>
        </BannerInfoStyle>
        <BannerImageStyle src={jersonMobile} />
      </BannerContentStyle>
      <div className="bottom_stars"></div>
    </BannerContainerStyle>
  );
};

const Arc = () => {
  return (
    <svg
      width="1440"
      height="670"
      viewBox="0 0 1440 670"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arc"
      preserveAspectRatio="none"
    >
      <g clipPath="url(#clip0_45_51)">
        <mask
          id="mask0_45_51"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="390"
          height="447"
        >
          <path d="M0 0H390V447H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_45_51)">
          <g opacity="0.4">
            <g opacity="0.6" filter="url(#filter0_f_45_51)">
              <path
                d="M276.196 -36.5084C262.637 -30.6392 252.035 -15.1045 247.826 3.84747C243.736 22.2562 247.71 41.6794 255.242 57.8253C262.698 73.8131 273.745 87.0516 287.352 88.5887C300.666 90.0925 312.257 78.6513 321.612 65.3223C330.98 51.9785 339.257 35.5069 337.643 16.9465C336.023 -1.63151 325.138 -14.8108 313.774 -24.6979C302.304 -34.6753 289.098 -42.0934 276.196 -36.5084Z"
                fill="url(#paint0_linear_45_51)"
              />
            </g>
            <g opacity="0.9" filter="url(#filter1_f_45_51)">
              <path
                d="M195.832 -148.385C176.685 -140.744 166.047 -112.855 155.298 -87.8822C145.237 -64.5071 135.405 -39.9722 137.252 -12.2842C139.215 17.1297 149.793 43.6793 165.293 61.9271C181.569 81.0878 201.878 91.7278 222.413 87.9743C243.877 84.0514 265.485 69.4004 276.613 41.5831C287.208 15.0931 280.472 -17.2206 276.635 -47.5747C272.919 -76.9867 270.548 -108.618 255.207 -127.758C238.968 -148.018 216.242 -156.531 195.832 -148.385Z"
                fill="url(#paint1_linear_45_51)"
              />
            </g>
            <g filter="url(#filter2_f_45_51)">
              <path
                opacity="0.6"
                d="M147.029 -46.6471C136.482 -45.4872 125.69 -33.1939 121.302 -14.0275C117.288 3.50764 123.336 22.6346 127.108 40.3836C129.679 52.4863 133.481 62.983 139.115 69.8047C144.201 75.9627 150.123 74.4442 156.053 75.4296C165.283 76.9627 175.495 88.4933 182.767 77.0568C190.56 64.8029 192.184 41.215 190.118 21.8579C188.147 3.40119 179.843 -7.88841 172.444 -19.6514C164.641 -32.0553 156.992 -47.7431 147.029 -46.6471Z"
                fill="#0500FF"
              />
            </g>
            <g opacity="0.9" filter="url(#filter3_f_45_51)">
              <path
                opacity="0.6"
                d="M91.9228 -65.3114C76.6849 -55.2615 62.4775 -29.7183 58.4646 0.132568C54.794 27.4433 65.994 48.8726 73.7035 70.2337C78.9604 84.8019 85.8106 96.175 94.8765 101.031C103.06 105.413 111.508 98.5788 120.277 95.1776C133.928 89.885 150.255 97.5401 159.437 75.996C169.275 52.9122 168.708 19.2021 163.285 -5.73642C158.115 -29.5145 144.598 -38.3671 132.345 -48.5964C119.423 -59.3831 106.315 -74.8044 91.9228 -65.3114Z"
                fill="url(#paint2_linear_45_51)"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_45_51"
          x="106.188"
          y="-178.427"
          width="371.658"
          height="407.149"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="70"
            result="effect1_foregroundBlur_45_51"
          />
        </filter>
        <filter
          id="filter1_f_45_51"
          x="-62.973"
          y="-351.449"
          width="545.276"
          height="640.171"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_45_51"
          />
        </filter>
        <filter
          id="filter2_f_45_51"
          x="-40.0208"
          y="-206.702"
          width="390.958"
          height="448.763"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="80"
            result="effect1_foregroundBlur_45_51"
          />
        </filter>
        <filter
          id="filter3_f_45_51"
          x="-142.254"
          y="-268.274"
          width="509.405"
          height="570.727"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_45_51"
          />
        </filter>
        <linearGradient
          id="paint0_linear_45_51"
          x1="274.208"
          y1="6.44889"
          x2="382.987"
          y2="26.347"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE8C7" />
          <stop offset="1" stopColor="#FFCD1B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_45_51"
          x1="198.049"
          y1="-11.7382"
          x2="339.727"
          y2="14.3988"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0099" />
          <stop offset="1" stopColor="#FFD600" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_45_51"
          x1="69.7892"
          y1="27.0613"
          x2="144.905"
          y2="24.4957"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#99FFF3" />
          <stop offset="1" stopColor="#0038FF" />
        </linearGradient>
        <clipPath id="clip0_45_51">
          <rect width="390" height="447" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Banner;
