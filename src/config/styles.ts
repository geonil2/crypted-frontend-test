import { keyframes } from "styled-components";

export const COLORS = {
  main: "#224fac",
  failed: "#FA113D",
  grayScale01: "#EFEFEF",
  grayscale02: "#E6E6E6",
  grayscale03: "#676767",
  white: "#FFFFFF",

  gradient:
    "linear-gradient(0deg, rgba(165,80,171,1) 0%, rgba(34,79,172,1) 50%)",
};

export const SHADOW = {
  basic: "8px 8px 15px rgba(0, 0, 0, 0.08)",
};

export const ANIMATIONS = {
  rotate: keyframes`0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }`,
  reverseRotate: keyframes`0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); }`,
  shine: keyframes`0% { background-position:
    100% 0,
    200px 0; }`,
  fadeIn: keyframes`0% { opacity: 0; } 100% { opacity: 1; }`,
  fadeOut: keyframes`0% { opacity: 1; } 100% { opacity: 0; }`,
};

export const MEDIA = {
  desktop: "@media only screen and (min-width: 1201px)",
  mobile: "@media only screen and (max-width: 768px)",
};
