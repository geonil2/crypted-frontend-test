import React from "react";
import {CryptedCommonTabProp} from "../../types/CryptedCommonTabProp";

/**
 * data/transaction.json 목록 무한 스크롤 페이지
 * scroll bottom 도달시 동일한 데이터(data/transaction.json) 출력 하도록
 * */
const TabInfinityScroll = (props: CryptedCommonTabProp) => {
    return <div>{props.title}</div>

}

export default TabInfinityScroll