import React from "react";

import useGetTxList from "src/hooks/useGetTxList";

import { CryptedCommonTabProp } from "src/types/CryptedCommonTabProp";

import { TabTxListLoadingUI } from "src/components/loadingUI/skeletonUI";
import { CryptedTabBody, TabTxList } from "src/components/tab";

/**
 *  data/transaction.json 목록 단순 출력 페이지
 *  */
const TabOrigin = (props: CryptedCommonTabProp) => {
  const { txList, isFetching } = useGetTxList();

  return (
    <CryptedTabBody>
      {txList?.map((tx, idx) => {
        return <TabTxList tx={tx} key={`crypted-tab-origin-List-key-${idx}`} />;
      })}
      {isFetching && <TabTxListLoadingUI count={10} />}
    </CryptedTabBody>
  );
};

export default TabOrigin;
