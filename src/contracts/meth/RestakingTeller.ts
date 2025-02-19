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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface RestakingTellerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "accountant"
      | "addAsset"
      | "authority"
      | "bulkDeposit"
      | "bulkWithdraw"
      | "cmETH"
      | "deposit"
      | "depositWithPermit"
      | "isPaused"
      | "isSupported"
      | "nativeWrapper"
      | "owner"
      | "pause"
      | "removeAsset"
      | "setAuthority"
      | "transferOwnership"
      | "unpause"
      | "vault"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AllowFrom"
      | "AllowOperator"
      | "AllowTo"
      | "AssetAdded"
      | "AssetRemoved"
      | "AuthorityUpdated"
      | "BulkDeposit"
      | "BulkWithdraw"
      | "DenyFrom"
      | "DenyOperator"
      | "DenyTo"
      | "Deposit"
      | "DepositRefunded"
      | "OwnershipTransferred"
      | "Paused"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "accountant",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAsset",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bulkDeposit",
    values: [AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bulkWithdraw",
    values: [AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "cmETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositWithPermit",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isSupported",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "nativeWrapper",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAsset",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(functionFragment: "accountant", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addAsset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bulkDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bulkWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cmETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nativeWrapper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
}

export namespace AllowFromEvent {
  export type InputTuple = [user: AddressLike];
  export type OutputTuple = [user: string];
  export interface OutputObject {
    user: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AllowOperatorEvent {
  export type InputTuple = [user: AddressLike];
  export type OutputTuple = [user: string];
  export interface OutputObject {
    user: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AllowToEvent {
  export type InputTuple = [user: AddressLike];
  export type OutputTuple = [user: string];
  export interface OutputObject {
    user: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AssetAddedEvent {
  export type InputTuple = [asset: AddressLike];
  export type OutputTuple = [asset: string];
  export interface OutputObject {
    asset: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AssetRemovedEvent {
  export type InputTuple = [asset: AddressLike];
  export type OutputTuple = [asset: string];
  export interface OutputObject {
    asset: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AuthorityUpdatedEvent {
  export type InputTuple = [user: AddressLike, newAuthority: AddressLike];
  export type OutputTuple = [user: string, newAuthority: string];
  export interface OutputObject {
    user: string;
    newAuthority: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BulkDepositEvent {
  export type InputTuple = [asset: AddressLike, depositAmount: BigNumberish];
  export type OutputTuple = [asset: string, depositAmount: bigint];
  export interface OutputObject {
    asset: string;
    depositAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BulkWithdrawEvent {
  export type InputTuple = [asset: AddressLike, shareAmount: BigNumberish];
  export type OutputTuple = [asset: string, shareAmount: bigint];
  export interface OutputObject {
    asset: string;
    shareAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DenyFromEvent {
  export type InputTuple = [user: AddressLike];
  export type OutputTuple = [user: string];
  export interface OutputObject {
    user: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DenyOperatorEvent {
  export type InputTuple = [user: AddressLike];
  export type OutputTuple = [user: string];
  export interface OutputObject {
    user: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DenyToEvent {
  export type InputTuple = [user: AddressLike];
  export type OutputTuple = [user: string];
  export interface OutputObject {
    user: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositEvent {
  export type InputTuple = [
    receiver: AddressLike,
    depositAsset: AddressLike,
    depositAmount: BigNumberish,
    shareAmount: BigNumberish,
    depositTimestamp: BigNumberish
  ];
  export type OutputTuple = [
    receiver: string,
    depositAsset: string,
    depositAmount: bigint,
    shareAmount: bigint,
    depositTimestamp: bigint
  ];
  export interface OutputObject {
    receiver: string;
    depositAsset: string;
    depositAmount: bigint;
    shareAmount: bigint;
    depositTimestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositRefundedEvent {
  export type InputTuple = [
    nonce: BigNumberish,
    depositHash: BytesLike,
    user: AddressLike
  ];
  export type OutputTuple = [nonce: bigint, depositHash: string, user: string];
  export interface OutputObject {
    nonce: bigint;
    depositHash: string;
    user: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [user: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [user: string, newOwner: string];
  export interface OutputObject {
    user: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RestakingTeller extends BaseContract {
  connect(runner?: ContractRunner | null): RestakingTeller;
  waitForDeployment(): Promise<this>;

  interface: RestakingTellerInterface;

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

  accountant: TypedContractMethod<[], [string], "view">;

  addAsset: TypedContractMethod<[asset: AddressLike], [void], "nonpayable">;

  authority: TypedContractMethod<[], [string], "view">;

  bulkDeposit: TypedContractMethod<
    [
      depositAsset: AddressLike,
      depositAmount: BigNumberish,
      minimumMint: BigNumberish,
      to: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  bulkWithdraw: TypedContractMethod<
    [
      withdrawAsset: AddressLike,
      shareAmount: BigNumberish,
      minimumAssets: BigNumberish,
      to: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  cmETH: TypedContractMethod<[], [string], "view">;

  deposit: TypedContractMethod<
    [
      depositAsset: AddressLike,
      depositAmount: BigNumberish,
      minimumMint: BigNumberish
    ],
    [bigint],
    "payable"
  >;

  depositWithPermit: TypedContractMethod<
    [
      depositAsset: AddressLike,
      depositAmount: BigNumberish,
      minimumMint: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  isPaused: TypedContractMethod<[], [boolean], "view">;

  isSupported: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  nativeWrapper: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  removeAsset: TypedContractMethod<[asset: AddressLike], [void], "nonpayable">;

  setAuthority: TypedContractMethod<
    [newAuthority: AddressLike],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  vault: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "accountant"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addAsset"
  ): TypedContractMethod<[asset: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "authority"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "bulkDeposit"
  ): TypedContractMethod<
    [
      depositAsset: AddressLike,
      depositAmount: BigNumberish,
      minimumMint: BigNumberish,
      to: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "bulkWithdraw"
  ): TypedContractMethod<
    [
      withdrawAsset: AddressLike,
      shareAmount: BigNumberish,
      minimumAssets: BigNumberish,
      to: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cmETH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [
      depositAsset: AddressLike,
      depositAmount: BigNumberish,
      minimumMint: BigNumberish
    ],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "depositWithPermit"
  ): TypedContractMethod<
    [
      depositAsset: AddressLike,
      depositAmount: BigNumberish,
      minimumMint: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isPaused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isSupported"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "nativeWrapper"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeAsset"
  ): TypedContractMethod<[asset: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setAuthority"
  ): TypedContractMethod<[newAuthority: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "vault"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "AllowFrom"
  ): TypedContractEvent<
    AllowFromEvent.InputTuple,
    AllowFromEvent.OutputTuple,
    AllowFromEvent.OutputObject
  >;
  getEvent(
    key: "AllowOperator"
  ): TypedContractEvent<
    AllowOperatorEvent.InputTuple,
    AllowOperatorEvent.OutputTuple,
    AllowOperatorEvent.OutputObject
  >;
  getEvent(
    key: "AllowTo"
  ): TypedContractEvent<
    AllowToEvent.InputTuple,
    AllowToEvent.OutputTuple,
    AllowToEvent.OutputObject
  >;
  getEvent(
    key: "AssetAdded"
  ): TypedContractEvent<
    AssetAddedEvent.InputTuple,
    AssetAddedEvent.OutputTuple,
    AssetAddedEvent.OutputObject
  >;
  getEvent(
    key: "AssetRemoved"
  ): TypedContractEvent<
    AssetRemovedEvent.InputTuple,
    AssetRemovedEvent.OutputTuple,
    AssetRemovedEvent.OutputObject
  >;
  getEvent(
    key: "AuthorityUpdated"
  ): TypedContractEvent<
    AuthorityUpdatedEvent.InputTuple,
    AuthorityUpdatedEvent.OutputTuple,
    AuthorityUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "BulkDeposit"
  ): TypedContractEvent<
    BulkDepositEvent.InputTuple,
    BulkDepositEvent.OutputTuple,
    BulkDepositEvent.OutputObject
  >;
  getEvent(
    key: "BulkWithdraw"
  ): TypedContractEvent<
    BulkWithdrawEvent.InputTuple,
    BulkWithdrawEvent.OutputTuple,
    BulkWithdrawEvent.OutputObject
  >;
  getEvent(
    key: "DenyFrom"
  ): TypedContractEvent<
    DenyFromEvent.InputTuple,
    DenyFromEvent.OutputTuple,
    DenyFromEvent.OutputObject
  >;
  getEvent(
    key: "DenyOperator"
  ): TypedContractEvent<
    DenyOperatorEvent.InputTuple,
    DenyOperatorEvent.OutputTuple,
    DenyOperatorEvent.OutputObject
  >;
  getEvent(
    key: "DenyTo"
  ): TypedContractEvent<
    DenyToEvent.InputTuple,
    DenyToEvent.OutputTuple,
    DenyToEvent.OutputObject
  >;
  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "DepositRefunded"
  ): TypedContractEvent<
    DepositRefundedEvent.InputTuple,
    DepositRefundedEvent.OutputTuple,
    DepositRefundedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;

  filters: {
    "AllowFrom(address)": TypedContractEvent<
      AllowFromEvent.InputTuple,
      AllowFromEvent.OutputTuple,
      AllowFromEvent.OutputObject
    >;
    AllowFrom: TypedContractEvent<
      AllowFromEvent.InputTuple,
      AllowFromEvent.OutputTuple,
      AllowFromEvent.OutputObject
    >;

    "AllowOperator(address)": TypedContractEvent<
      AllowOperatorEvent.InputTuple,
      AllowOperatorEvent.OutputTuple,
      AllowOperatorEvent.OutputObject
    >;
    AllowOperator: TypedContractEvent<
      AllowOperatorEvent.InputTuple,
      AllowOperatorEvent.OutputTuple,
      AllowOperatorEvent.OutputObject
    >;

    "AllowTo(address)": TypedContractEvent<
      AllowToEvent.InputTuple,
      AllowToEvent.OutputTuple,
      AllowToEvent.OutputObject
    >;
    AllowTo: TypedContractEvent<
      AllowToEvent.InputTuple,
      AllowToEvent.OutputTuple,
      AllowToEvent.OutputObject
    >;

    "AssetAdded(address)": TypedContractEvent<
      AssetAddedEvent.InputTuple,
      AssetAddedEvent.OutputTuple,
      AssetAddedEvent.OutputObject
    >;
    AssetAdded: TypedContractEvent<
      AssetAddedEvent.InputTuple,
      AssetAddedEvent.OutputTuple,
      AssetAddedEvent.OutputObject
    >;

    "AssetRemoved(address)": TypedContractEvent<
      AssetRemovedEvent.InputTuple,
      AssetRemovedEvent.OutputTuple,
      AssetRemovedEvent.OutputObject
    >;
    AssetRemoved: TypedContractEvent<
      AssetRemovedEvent.InputTuple,
      AssetRemovedEvent.OutputTuple,
      AssetRemovedEvent.OutputObject
    >;

    "AuthorityUpdated(address,address)": TypedContractEvent<
      AuthorityUpdatedEvent.InputTuple,
      AuthorityUpdatedEvent.OutputTuple,
      AuthorityUpdatedEvent.OutputObject
    >;
    AuthorityUpdated: TypedContractEvent<
      AuthorityUpdatedEvent.InputTuple,
      AuthorityUpdatedEvent.OutputTuple,
      AuthorityUpdatedEvent.OutputObject
    >;

    "BulkDeposit(address,uint256)": TypedContractEvent<
      BulkDepositEvent.InputTuple,
      BulkDepositEvent.OutputTuple,
      BulkDepositEvent.OutputObject
    >;
    BulkDeposit: TypedContractEvent<
      BulkDepositEvent.InputTuple,
      BulkDepositEvent.OutputTuple,
      BulkDepositEvent.OutputObject
    >;

    "BulkWithdraw(address,uint256)": TypedContractEvent<
      BulkWithdrawEvent.InputTuple,
      BulkWithdrawEvent.OutputTuple,
      BulkWithdrawEvent.OutputObject
    >;
    BulkWithdraw: TypedContractEvent<
      BulkWithdrawEvent.InputTuple,
      BulkWithdrawEvent.OutputTuple,
      BulkWithdrawEvent.OutputObject
    >;

    "DenyFrom(address)": TypedContractEvent<
      DenyFromEvent.InputTuple,
      DenyFromEvent.OutputTuple,
      DenyFromEvent.OutputObject
    >;
    DenyFrom: TypedContractEvent<
      DenyFromEvent.InputTuple,
      DenyFromEvent.OutputTuple,
      DenyFromEvent.OutputObject
    >;

    "DenyOperator(address)": TypedContractEvent<
      DenyOperatorEvent.InputTuple,
      DenyOperatorEvent.OutputTuple,
      DenyOperatorEvent.OutputObject
    >;
    DenyOperator: TypedContractEvent<
      DenyOperatorEvent.InputTuple,
      DenyOperatorEvent.OutputTuple,
      DenyOperatorEvent.OutputObject
    >;

    "DenyTo(address)": TypedContractEvent<
      DenyToEvent.InputTuple,
      DenyToEvent.OutputTuple,
      DenyToEvent.OutputObject
    >;
    DenyTo: TypedContractEvent<
      DenyToEvent.InputTuple,
      DenyToEvent.OutputTuple,
      DenyToEvent.OutputObject
    >;

    "Deposit(address,address,uint256,uint256,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "DepositRefunded(uint256,bytes32,address)": TypedContractEvent<
      DepositRefundedEvent.InputTuple,
      DepositRefundedEvent.OutputTuple,
      DepositRefundedEvent.OutputObject
    >;
    DepositRefunded: TypedContractEvent<
      DepositRefundedEvent.InputTuple,
      DepositRefundedEvent.OutputTuple,
      DepositRefundedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Paused()": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "Unpaused()": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
  };
}
