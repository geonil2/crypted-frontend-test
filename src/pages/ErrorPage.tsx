import React from "react";
import styled from "styled-components";

import { ANIMATIONS, COLORS, MEDIA } from "src/config/styles";

const ErrorPageCtnr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const animatePath = styled.path`
  transform-origin: center;
  transform-box: fill-box;
`;

const Path1 = styled(animatePath)`
  animation: ${ANIMATIONS.rotate} 1.5s linear infinite;
`;

const Path2 = styled(animatePath)`
  animation: ${ANIMATIONS.reverseRotate} 1.5s linear infinite;
`;

const Path3 = styled(animatePath)`
  animation: ${ANIMATIONS.rotate} 2.5s linear infinite;
`;

const Path4 = styled(animatePath)`
  animation: ${ANIMATIONS.reverseRotate} 2.5s linear infinite;
`;

const Path5 = styled(animatePath)`
  animation: ${ANIMATIONS.rotate} 1.5s linear infinite;
`;

const Path6 = styled(animatePath)`
  animation: ${ANIMATIONS.reverseRotate} 1.5s linear infinite;
`;

const ErrorMsg = styled.div`
  text-align: center;
  margin-top: 10px;

  span {
    display: block;
  }

  ${MEDIA.mobile} {
    span {
      font-size: 12px;
    }
  }
`;

const ErrorPage = () => {
  return (
    <ErrorPageCtnr>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <Path1
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60ZM30 60C44.9117 60 57 47.9117 57 33C57 18.0883 44.9117 6 30 6C15.0883 6 3 18.0883 3 33C3 47.9117 15.0883 60 30 60Z"
            fill={COLORS.main + "03"}
          />
          <Path2
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 60C44.9117 60 57 47.9117 57 33C57 18.0883 44.9117 6 30 6C15.0883 6 3 18.0883 3 33C3 47.9117 15.0883 60 30 60ZM30 60C43.2548 60 54 49.2548 54 36C54 22.7452 43.2548 12 30 12C16.7452 12 6 22.7452 6 36C6 49.2548 16.7452 60 30 60Z"
            fill={COLORS.main + "33"}
          />
          <Path3
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 60C43.2548 60 54 49.2548 54 36C54 22.7452 43.2548 12 30 12C16.7452 12 6 22.7452 6 36C6 49.2548 16.7452 60 30 60ZM30 60C41.598 60 51 50.598 51 39C51 27.402 41.598 18 30 18C18.402 18 9 27.402 9 39C9 50.598 18.402 60 30 60Z"
            fill={COLORS.main + "66"}
          />
          <Path4
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 60C41.598 60 51 50.598 51 39C51 27.402 41.598 18 30 18C18.402 18 9 27.402 9 39C9 50.598 18.402 60 30 60ZM30 60C39.9411 60 48 51.9411 48 42C48 32.0589 39.9411 24 30 24C20.0589 24 12 32.0589 12 42C12 51.9411 20.0589 60 30 60Z"
            fill={COLORS.main + "99"}
          />
          <Path5
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 60C39.9411 60 48 51.9411 48 42C48 32.0589 39.9411 24 30 24C20.0589 24 12 32.0589 12 42C12 51.9411 20.0589 60 30 60ZM30 60C38.2843 60 45 53.2843 45 45C45 36.7157 38.2843 30 30 30C21.7157 30 15 36.7157 15 45C15 53.2843 21.7157 60 30 60Z"
            fill={COLORS.main + "CC"}
          />
          <Path6
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 60C38.2843 60 45 53.2843 45 45C45 36.7157 38.2843 30 30 30C21.7157 30 15 36.7157 15 45C15 53.2843 21.7157 60 30 60ZM30 60C36.6274 60 42 54.6274 42 48C42 41.3726 36.6274 36 30 36C23.3726 36 18 41.3726 18 48C18 54.6274 23.3726 60 30 60Z"
            fill={COLORS.main}
          />
        </g>
      </svg>
      <ErrorMsg>
        <span>Oops! Something went wrong</span>
        <span>Please try again later</span>
      </ErrorMsg>
    </ErrorPageCtnr>
  );
};

export default ErrorPage;
