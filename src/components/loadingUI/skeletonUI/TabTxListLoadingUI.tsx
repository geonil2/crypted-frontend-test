import React from "react";
import styled from "styled-components";

import { MEDIA } from "src/config/styles";

import SkeletonUI from "./SkeletonUI";

import { makeIndexArray } from "src/utils/Utils";

const CustomSkeletonUI = styled(SkeletonUI)`
  height: 156px;
  margin: 10px 0px;

  ${MEDIA.mobile} {
    height: 98px;
  }
`;

interface TabTxListLoadingUIProps {
  count: number;
}

const TabTxListLoadingUI = ({ count }: TabTxListLoadingUIProps) => {
  return (
    <div>
      {makeIndexArray(count).map((idx) => {
        return <CustomSkeletonUI key={`crypted-tab-tx-loading-${idx}`} />;
      })}
    </div>
  );
};

export default TabTxListLoadingUI;
