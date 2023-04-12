import React from "react";
import { CryptedCommonTabProp } from "../../types/CryptedCommonTabProp";
import useGetTxList from "src/hooks/useGetTxList";
import TabTxList from "./TabTxList";

import CryptedTabBody from "./CryptedTabBody";
import TabTxListLoadingUI from "../loadingUI/skeletonUI/TabTxListLoadingUI";

/**
 *  data/transaction.json 목록 단순 출력 페이지
 *  */
const TabOrigin = (props: CryptedCommonTabProp) => {
  const { data: txList, isFetching } = useGetTxList();

  return (
    <CryptedTabBody>
      {txList?.map((tx, index) => {
        return (
          <TabTxList tx={tx} key={`crypted-tab-origin-List-key-${index}`} />
        );
      })}
      {isFetching && <TabTxListLoadingUI count={10} />}
    </CryptedTabBody>
  );
};

export default TabOrigin;
