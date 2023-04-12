import { API } from "src/config/api";
import { Tx } from "./types";

export const getTxListApi = async () => {
  const { data } = await API.get<Tx[]>("/data/transaction.json");
  return data;
};
