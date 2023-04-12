export const getTxListQueryKey = "getTxListQueryKey";

export interface Tx {
  txid: string;
  amount: string;
  createdDate: string;
  fromAddress: string;
  toAddress: string;
  status: "success" | "fail";
  symbol: "KOK_DEV" | "SOP_DEV" | "XDC_DEV";
  fromAddressForDisplay: string;
  toAddressForDisplay: string;
}
