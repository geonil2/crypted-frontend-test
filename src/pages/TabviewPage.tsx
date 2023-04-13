import React from "react";
import styled from "styled-components";

import { COLORS, MEDIA, SHADOW } from "src/config/styles";

import { CryptedTab, TabInfinityScroll, TabOrigin } from "src/components/tab";

const TabviewCtnr = styled.div`
  width: 100%;
  height: 90vh;
  max-width: 500px;
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
