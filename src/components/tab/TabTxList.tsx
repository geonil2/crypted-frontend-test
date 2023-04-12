import { firstLetterUppercase } from "@geonil2/util-func";
import { COLORS, MEDIA } from "src/config/styles";
import { Tx } from "src/services/transaction/types";
import styled from "styled-components";

import KokTicker from "src/assets/images/kok.png";
import SopTicker from "src/assets/images/sop.svg";
import XdcTicker from "src/assets/images/xdc.png";
import { shortCutAddressByLength } from "src/utils/Utils";

const TabTxListCtnr = styled.li`
  display: grid;
  grid-template-columns: min(80px) max-content;
  gap: 10px;
  background-color: ${COLORS.white};
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px;

  ${MEDIA.mobile} {
    grid-template-columns: min(60px) max-content;
    gap: 2px 5px;
    font-size: 12px;
  }
`;

const TxTit = styled.p`
  font-weight: 500;
`;

interface StatusProps {
  success: boolean;
}

const Status = styled.span<StatusProps>`
  color: ${({ success }) => (success ? COLORS.main : COLORS.failed)};
`;

const Symbol = styled.span`
  display: flex;
  align-items: center;
`;
const Ticker = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 3px;

  ${MEDIA.mobile} {
    width: 12px;
    height: 12px;
  }
`;

const Amount = styled.span`
  color: ${COLORS.grayscale03};
`;

const FromAddressForDisplay = styled.span`
  color: ${COLORS.grayscale03};
`;

const ToAddressForDisplay = styled.span`
  color: ${COLORS.grayscale03};
`;

interface TabTxListProps {
  tx: Tx;
}

const TabTxList = ({ tx }: TabTxListProps) => {
  const { status, symbol, amount, fromAddressForDisplay, toAddressForDisplay } =
    tx;

  const getTickerSrc = () => {
    switch (symbol) {
      case "KOK_DEV":
        return KokTicker;
      case "SOP_DEV":
        return SopTicker;
      case "XDC_DEV":
        return XdcTicker;
      default:
        break;
    }
  };

  return (
    <TabTxListCtnr>
      <TxTit>STATUS</TxTit>
      <Status success={status === "success"}>
        {firstLetterUppercase(status)}
      </Status>

      <TxTit>SYMBOL</TxTit>
      <Symbol>
        <Ticker src={getTickerSrc()} /> {symbol}
      </Symbol>

      <TxTit>AMOUNT</TxTit>
      <Amount>{amount}</Amount>

      <TxTit>FROM</TxTit>
      <FromAddressForDisplay>
        {shortCutAddressByLength(fromAddressForDisplay)}
      </FromAddressForDisplay>

      <TxTit>TO</TxTit>
      <ToAddressForDisplay>
        {shortCutAddressByLength(toAddressForDisplay)}
      </ToAddressForDisplay>
    </TabTxListCtnr>
  );
};

export default TabTxList;
