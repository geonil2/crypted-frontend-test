import { shortCutAddress } from "@geonil2/util-func";

export const shortCutAddressByLength = (address: string) => {
  return address.length > 20 ? shortCutAddress(address, 10) : address;
};

export const makeIndexArray = (count: number) => {
  return [...new Array(count)].map((_, i) => i);
};
