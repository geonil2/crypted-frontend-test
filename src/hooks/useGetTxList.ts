import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getTxListApi } from "src/services/transaction/apis";
import { getTxListQueryKey, Tx } from "src/services/transaction/types";

const useGetTxList = (scroll: number | undefined = 0) => {
  const [txList, setTxList] = useState<Tx[]>([]);
  const { data, isFetching } = useQuery(
    [getTxListQueryKey, { scroll }],
    getTxListApi,
    {
      suspense: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      staleTime: 0,
      cacheTime: 0,
    }
  );

  useEffect(() => {
    data && setTxList((prev) => [...prev, ...data]);
  }, [data]);

  return { data: txList, isFetching };
};

export default useGetTxList;
