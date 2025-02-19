/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace ISwapRouter {
  export type ExactInputParamsStruct = {
    path: BytesLike;
    recipient: AddressLike;
    deadline: BigNumberish;
    amountIn: BigNumberish;
    amountOutMinimum: BigNumberish;
  };

  export type ExactInputParamsStructOutput = [
    path: string,
    recipient: string,
    deadline: bigint,
    amountIn: bigint,
    amountOutMinimum: bigint
  ] & {
    path: string;
    recipient: string;
    deadline: bigint;
    amountIn: bigint;
    amountOutMinimum: bigint;
  };

  export type ExactInputSingleParamsStruct = {
    tokenIn: AddressLike;
    tokenOut: AddressLike;
    fee: BigNumberish;
    recipient: AddressLike;
    deadline: BigNumberish;
    amountIn: BigNumberish;
    amountOutMinimum: BigNumberish;
    sqrtPriceLimitX96: BigNumberish;
  };

  export type ExactInputSingleParamsStructOutput = [
    tokenIn: string,
    tokenOut: string,
    fee: bigint,
    recipient: string,
    deadline: bigint,
    amountIn: bigint,
    amountOutMinimum: bigint,
    sqrtPriceLimitX96: bigint
  ] & {
    tokenIn: string;
    tokenOut: string;
    fee: bigint;
    recipient: string;
    deadline: bigint;
    amountIn: bigint;
    amountOutMinimum: bigint;
    sqrtPriceLimitX96: bigint;
  };

  export type ExactOutputParamsStruct = {
    path: BytesLike;
    recipient: AddressLike;
    deadline: BigNumberish;
    amountOut: BigNumberish;
    amountInMaximum: BigNumberish;
  };

  export type ExactOutputParamsStructOutput = [
    path: string,
    recipient: string,
    deadline: bigint,
    amountOut: bigint,
    amountInMaximum: bigint
  ] & {
    path: string;
    recipient: string;
    deadline: bigint;
    amountOut: bigint;
    amountInMaximum: bigint;
  };

  export type ExactOutputSingleParamsStruct = {
    tokenIn: AddressLike;
    tokenOut: AddressLike;
    fee: BigNumberish;
    recipient: AddressLike;
    deadline: BigNumberish;
    amountOut: BigNumberish;
    amountInMaximum: BigNumberish;
    sqrtPriceLimitX96: BigNumberish;
  };

  export type ExactOutputSingleParamsStructOutput = [
    tokenIn: string,
    tokenOut: string,
    fee: bigint,
    recipient: string,
    deadline: bigint,
    amountOut: bigint,
    amountInMaximum: bigint,
    sqrtPriceLimitX96: bigint
  ] & {
    tokenIn: string;
    tokenOut: string;
    fee: bigint;
    recipient: string;
    deadline: bigint;
    amountOut: bigint;
    amountInMaximum: bigint;
    sqrtPriceLimitX96: bigint;
  };
}

export interface SwapRouterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "WMNT"
      | "agniSwapCallback"
      | "deployer"
      | "exactInput"
      | "exactInputSingle"
      | "exactOutput"
      | "exactOutputSingle"
      | "factory"
      | "multicall"
      | "refundMNT"
      | "selfPermit"
      | "selfPermitAllowed"
      | "selfPermitAllowedIfNecessary"
      | "selfPermitIfNecessary"
      | "sweepToken"
      | "sweepTokenWithFee"
      | "unwrapWMNT"
      | "unwrapWMNTWithFee"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "WMNT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "agniSwapCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "exactInput",
    values: [ISwapRouter.ExactInputParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactInputSingle",
    values: [ISwapRouter.ExactInputSingleParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutput",
    values: [ISwapRouter.ExactOutputParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutputSingle",
    values: [ISwapRouter.ExactOutputSingleParamsStruct]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "refundMNT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "selfPermit",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitAllowed",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitAllowedIfNecessary",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitIfNecessary",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sweepToken",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sweepTokenWithFee",
    values: [AddressLike, BigNumberish, AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapWMNT",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapWMNTWithFee",
    values: [BigNumberish, AddressLike, BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "WMNT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "agniSwapCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exactInputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "refundMNT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "selfPermit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitAllowedIfNecessary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitIfNecessary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sweepToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sweepTokenWithFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unwrapWMNT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unwrapWMNTWithFee",
    data: BytesLike
  ): Result;
}

export interface SwapRouter extends BaseContract {
  connect(runner?: ContractRunner | null): SwapRouter;
  waitForDeployment(): Promise<this>;

  interface: SwapRouterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  WMNT: TypedContractMethod<[], [string], "view">;

  agniSwapCallback: TypedContractMethod<
    [amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  deployer: TypedContractMethod<[], [string], "view">;

  exactInput: TypedContractMethod<
    [params: ISwapRouter.ExactInputParamsStruct],
    [bigint],
    "payable"
  >;

  exactInputSingle: TypedContractMethod<
    [params: ISwapRouter.ExactInputSingleParamsStruct],
    [bigint],
    "payable"
  >;

  exactOutput: TypedContractMethod<
    [params: ISwapRouter.ExactOutputParamsStruct],
    [bigint],
    "payable"
  >;

  exactOutputSingle: TypedContractMethod<
    [params: ISwapRouter.ExactOutputSingleParamsStruct],
    [bigint],
    "payable"
  >;

  factory: TypedContractMethod<[], [string], "view">;

  multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "payable">;

  refundMNT: TypedContractMethod<[], [void], "payable">;

  selfPermit: TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;

  selfPermitAllowed: TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;

  selfPermitAllowedIfNecessary: TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;

  selfPermitIfNecessary: TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;

  sweepToken: TypedContractMethod<
    [token: AddressLike, amountMinimum: BigNumberish, recipient: AddressLike],
    [void],
    "payable"
  >;

  sweepTokenWithFee: TypedContractMethod<
    [
      token: AddressLike,
      amountMinimum: BigNumberish,
      recipient: AddressLike,
      feeBips: BigNumberish,
      feeRecipient: AddressLike
    ],
    [void],
    "payable"
  >;

  unwrapWMNT: TypedContractMethod<
    [amountMinimum: BigNumberish, recipient: AddressLike],
    [void],
    "payable"
  >;

  unwrapWMNTWithFee: TypedContractMethod<
    [
      amountMinimum: BigNumberish,
      recipient: AddressLike,
      feeBips: BigNumberish,
      feeRecipient: AddressLike
    ],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "WMNT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "agniSwapCallback"
  ): TypedContractMethod<
    [amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deployer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "exactInput"
  ): TypedContractMethod<
    [params: ISwapRouter.ExactInputParamsStruct],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "exactInputSingle"
  ): TypedContractMethod<
    [params: ISwapRouter.ExactInputSingleParamsStruct],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "exactOutput"
  ): TypedContractMethod<
    [params: ISwapRouter.ExactOutputParamsStruct],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "exactOutputSingle"
  ): TypedContractMethod<
    [params: ISwapRouter.ExactOutputSingleParamsStruct],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "multicall"
  ): TypedContractMethod<[data: BytesLike[]], [string[]], "payable">;
  getFunction(
    nameOrSignature: "refundMNT"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "selfPermit"
  ): TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "selfPermitAllowed"
  ): TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "selfPermitAllowedIfNecessary"
  ): TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "selfPermitIfNecessary"
  ): TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "sweepToken"
  ): TypedContractMethod<
    [token: AddressLike, amountMinimum: BigNumberish, recipient: AddressLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "sweepTokenWithFee"
  ): TypedContractMethod<
    [
      token: AddressLike,
      amountMinimum: BigNumberish,
      recipient: AddressLike,
      feeBips: BigNumberish,
      feeRecipient: AddressLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "unwrapWMNT"
  ): TypedContractMethod<
    [amountMinimum: BigNumberish, recipient: AddressLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "unwrapWMNTWithFee"
  ): TypedContractMethod<
    [
      amountMinimum: BigNumberish,
      recipient: AddressLike,
      feeBips: BigNumberish,
      feeRecipient: AddressLike
    ],
    [void],
    "payable"
  >;

  filters: {};
}
