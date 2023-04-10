import React from "react";
import {CryptedCommonTabProp} from "../../types/CryptedCommonTabProp";

/**
 *  data/transaction.json 목록 단순 출력 페이지
 *  */
const TabOrigin = (props: CryptedCommonTabProp) => {
    return <div>{props.title}</div>
}

export default TabOrigin