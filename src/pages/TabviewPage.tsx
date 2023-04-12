import React from "react";
import styled from "styled-components";

import { COLORS, MEDIA, SHADOW } from "src/config/styles";

import CryptedTab from "src/components/tab/CryptedTab";
import TabOrigin from "src/components/tab/TabOrigin";
import TabInfinityScroll from "src/components/tab/TabInfinityScroll";

const TabviewCtnr = styled.div`
  width: 100%;
  height: 90vh;
  max-width: 500px;
  /* background-color: ${COLORS.white}; */
  background: ${COLORS.gradient};
  box-shadow: ${SHADOW.basic};
  border-radius: 5px;
  padding: 20px;

  ${MEDIA.mobile} {
    width: 90%;
  }
`;

const Title = styled.div`
  font-weight: bold;
  color: ${COLORS.white};
  text-align: center;
  line-height: 20px;
`;

const TabviewPage = () => {
  return (
    <TabviewCtnr>
      <Title>
        <span>Crypted Tab View</span>
      </Title>
      {/* tab */}
      <CryptedTab>
        <TabOrigin title="Origin" key="Origin" />
        <TabInfinityScroll title="InfinityScroll" key="InfinityScroll" />
      </CryptedTab>
    </TabviewCtnr>
  );
};

export default TabviewPage;
