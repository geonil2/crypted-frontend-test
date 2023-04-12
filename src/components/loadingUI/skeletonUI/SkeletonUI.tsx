import React from "react";
import styled from "styled-components";

import { ANIMATIONS, COLORS } from "src/config/styles";

const SkeletonUI = styled.div`
  &:empty {
    border-radius: 5px;
    background-repeat: repeat-x;
    background-image: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 80%
      ),
      linear-gradient(${COLORS.grayscale02} 200px, transparent 0);
    background-size: 200px 200px, 200px 300px;
    background-position: 0 0, 200px 0;
    animation: ${ANIMATIONS.shine} 1s infinite;
  }
`;

export default SkeletonUI;
