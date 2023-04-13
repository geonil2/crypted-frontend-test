import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getTxListApi } from "src/services/apis";
import { getTxListQueryKey, Tx } from "src/types/transaction";

const useGetTxList = (scrollCount: number | undefined = 0) => {
  const [txList, setTxList] = useState<Tx[]>([]);
  const { data, isFetching } = useQuery(
    [getTxListQueryKey, { scrollCount }],
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

  return { txList, isFetching };
};

export default useGetTxList;
