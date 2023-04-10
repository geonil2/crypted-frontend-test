import React from "react";
import CryptedTab from "../component/tab/CryptedTab";
import TabOrigin from "../component/tab/TabOrigin";
import TabInfinityScroll from "../component/tab/TabInfinityScroll";
import styled from "styled-components";

const Title = styled.div`
  font-weight: bold;
  text-align: center;
`;
const TabviewPage = () => {
    return (<div>
        <Title>
            <span>Crypted Tab View Exam</span>
        </Title>
        {/* tab */}
        <CryptedTab>
            <TabOrigin title="TabFirst" key="TabFirst"/>
            <TabInfinityScroll title="TabSecond" key="TabSecond"/>
        </CryptedTab>
    </div>)
}

export default TabviewPage;