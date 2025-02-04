import { ethers, JsonRpcProvider } from "ethers";
import { env } from "src/configs";

const isMainnet = env.network === 'mainnet';
export const PROVIDER = new JsonRpcProvider(isMainnet ? env.eth.mainnetRpc : env.eth.testnetRpc);
export const L2_PROVIDER = new JsonRpcProvider(isMainnet ? env.mantle.mainnetRpc : env.mantle.testnetRpc);

export const METH_ADDRESS = isMainnet ? '0xd5F7838F5C461fefF7FE49ea5ebaF7728bB0ADfa' : '0x072d71b257ECa6B60b5333626F6a55ea1B0c451c';
export const CMETH_ADDRESS = isMainnet ? '0xE6829d9a7eE3040e1276Fa75293Bde931859e8fA' : '0x859EC22151C649EcE58b6b6637100AC11E1EaB18';
export const CMETH_ADAPTER_ADDRESS = isMainnet ? '0x4aFA9620D0B79137383A7A9AB3477837d475e948' : '0x641a9834c18CA3293bdb53804BC9ca53576bd7E9';

export const AGNI_QUOTER_ADDRESS = isMainnet ? '' : '';
export const AGNI_ROUTER_ADDRESS = isMainnet ? '0x319B69888b0d11cEC22caA5034e25FfFBDc88421' : '0xe38cfa32cCd918d94E2e20230dFaD1A4Fd8aEF16';

export const NATIVE = ethers.ZeroAddress;
export const WRAPPED_NATIVE = isMainnet ? '0x4200000000000000000000000000000000000006' : '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF';

export const MULTICALL_ADDRESS = '0xcA11bde05977b3631167028862bE2a173976CA11';

export const CHAIN_ID = isMainnet ? 1 : 11155111;
export const MAX_UINT256 = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

export interface TokenConfigInfo {
  address: string,
  pair: string,
  symbol: string,
}
export const TokenConfig = {

}