import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import useGetTxList from "src/hooks/useGetTxList";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";

import { TabTxListLoadingUI } from "src/components/loadingUI/skeletonUI";
import { CryptedTabBody, TabTxList } from "src/components/tab";

import { CryptedCommonTabProp } from "src/types/CryptedCommonTabProp";

const ScrollBot = styled.div`
  min-height: 40px;
`;

/**
 * data/transaction.json 목록 무한 스크롤 페이지
 * scroll bottom 도달시 동일한 데이터(data/transaction.json) 출력 하도록
 * */
const TabInfinityScroll = (props: CryptedCommonTabProp) => {
  const [scroll, setScroll] = useState(0);
  const [prevScrollHeight, setPrevScrollHeight] = useState<number | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollTargetRef = useRef<HTMLDivElement>(null);
  const { observe, unobserve } = useIntersectionObserver(() => {
    setPrevScrollHeight(scrollAreaRef.current?.scrollHeight || null);

    setScroll((prev) => prev + 1);
    scrollTargetRef.current && unobserve(scrollTargetRef.current);
  });
  const { txList, isFetching } = useGetTxList(scroll);

  useEffect(() => {
    scrollTargetRef.current && observe(scrollTargetRef.current);
    prevScrollHeight && setPrevScrollHeight(null);
  }, [txList]);

  return (
    <CryptedTabBody>
      {txList?.map((tx, index) => {
        return <TabTxList tx={tx} key={`crypted-tab-tx-List-key-${index}`} />;
      })}
      <ScrollBot ref={scrollTargetRef}>
        {isFetching && <TabTxListLoadingUI count={5} />}
      </ScrollBot>
    </CryptedTabBody>
  );
};

export default TabInfinityScroll;
