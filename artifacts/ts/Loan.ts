/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  Asset,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
  Narrow,
} from "@alephium/web3";
import { default as LoanContractJson } from "../loans/Loan.ral.json";
import { getContractByCodeHash, registerContract } from "./contracts";
import { DIAOracleValue, OracleData, PairInfo, AllStructs } from "./types";

// Custom types for the contract
export namespace LoanTypes {
  export type Fields = {
    creator: Address;
    loanee: Address;
    tokenRequested: HexString;
    tokenAmount: bigint;
    collateralToken: HexString;
    collateralAmount: bigint;
    interest: bigint;
    rate: bigint;
    duration: bigint;
    startTime: bigint;
    active: boolean;
    parentContract: Address;
    canLiquidate: boolean;
    liquidation: boolean;
    ratio: bigint;
    highestBidder: Address;
    highestBid: bigint;
    timeToEnd: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getTokenRequested: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<[HexString, bigint]>;
    };
    getHighestBid: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getTokenCollateral: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<[HexString, bigint]>;
    };
    canLoanLiquidate: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<boolean>;
    };
    isLoanComplete: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<boolean>;
    };
    getInterest: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getCommission: {
      params: CallContractParams<{ total: bigint }>;
      result: CallContractResult<bigint>;
    };
    acceptLoan: {
      params: CallContractParams<{ acceptor: Address; newRatio: bigint }>;
      result: CallContractResult<null>;
    };
    cancelLoan: {
      params: CallContractParams<{ caller: Address }>;
      result: CallContractResult<null>;
    };
    forceCancel: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<null>;
    };
    payLoan: {
      params: CallContractParams<{ caller: Address }>;
      result: CallContractResult<null>;
    };
    acceptForfeit: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<null>;
    };
    addCollateral: {
      params: CallContractParams<{
        caller: Address;
        collateralAdded: bigint;
        newRatio: bigint;
      }>;
      result: CallContractResult<bigint>;
    };
    activateLiquidation: {
      params: CallContractParams<{ collateralLevel: bigint }>;
      result: CallContractResult<null>;
    };
    bid: {
      params: CallContractParams<{ caller: Address; bidAmount: bigint }>;
      result: CallContractResult<bigint>;
    };
    redeem: {
      params: CallContractParams<{ caller: Address }>;
      result: CallContractResult<null>;
    };
    updateLoanCode: {
      params: CallContractParams<{ newCode: HexString }>;
      result: CallContractResult<null>;
    };
    updateLoanFields: {
      params: CallContractParams<{
        newCode: HexString;
        immFields: HexString;
        mutFields: HexString;
      }>;
      result: CallContractResult<null>;
    };
    removeCollateral: {
      params: CallContractParams<{
        caller: Address;
        collateralRemoved: bigint;
        newRatio: bigint;
      }>;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
  export type MulticallReturnType<Callss extends MultiCallParams[]> = {
    [index in keyof Callss]: MultiCallResults<Callss[index]>;
  };

  export interface SignExecuteMethodTable {
    getTokenRequested: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getHighestBid: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getTokenCollateral: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    canLoanLiquidate: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    isLoanComplete: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getInterest: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getCommission: {
      params: SignExecuteContractMethodParams<{ total: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    acceptLoan: {
      params: SignExecuteContractMethodParams<{
        acceptor: Address;
        newRatio: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    cancelLoan: {
      params: SignExecuteContractMethodParams<{ caller: Address }>;
      result: SignExecuteScriptTxResult;
    };
    forceCancel: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    payLoan: {
      params: SignExecuteContractMethodParams<{ caller: Address }>;
      result: SignExecuteScriptTxResult;
    };
    acceptForfeit: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    addCollateral: {
      params: SignExecuteContractMethodParams<{
        caller: Address;
        collateralAdded: bigint;
        newRatio: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    activateLiquidation: {
      params: SignExecuteContractMethodParams<{ collateralLevel: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    bid: {
      params: SignExecuteContractMethodParams<{
        caller: Address;
        bidAmount: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    redeem: {
      params: SignExecuteContractMethodParams<{ caller: Address }>;
      result: SignExecuteScriptTxResult;
    };
    updateLoanCode: {
      params: SignExecuteContractMethodParams<{ newCode: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    updateLoanFields: {
      params: SignExecuteContractMethodParams<{
        newCode: HexString;
        immFields: HexString;
        mutFields: HexString;
      }>;
      result: SignExecuteScriptTxResult;
    };
    removeCollateral: {
      params: SignExecuteContractMethodParams<{
        caller: Address;
        collateralRemoved: bigint;
        newRatio: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<LoanInstance, LoanTypes.Fields> {
  encodeFields(fields: LoanTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  consts = {
    Loan: {
      AuctionEnded: BigInt("0"),
      InvalidCaller: BigInt("1"),
      AuctionActive: BigInt("2"),
    },
  };

  at(address: string): LoanInstance {
    return new LoanInstance(address);
  }

  tests = {
    getTokenRequested: async (
      params: Omit<
        TestContractParamsWithoutMaps<LoanTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<[HexString, bigint]>> => {
      return testMethod(
        this,
        "getTokenRequested",
        params,
        getContractByCodeHash
      );
    },
    getHighestBid: async (
      params: Omit<
        TestContractParamsWithoutMaps<LoanTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getHighestBid", params, getContractByCodeHash);
    },
    getTokenCollateral: async (
      params: Omit<
        TestContractParamsWithoutMaps<LoanTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<[HexString, bigint]>> => {
      return testMethod(
        this,
        "getTokenCollateral",
        params,
        getContractByCodeHash
      );
    },
    canLoanLiquidate: async (
      params: Omit<
        TestContractParamsWithoutMaps<LoanTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<boolean>> => {
      return testMethod(
        this,
        "canLoanLiquidate",
        params,
        getContractByCodeHash
      );
    },
    isLoanComplete: async (
      params: Omit<
        TestContractParamsWithoutMaps<LoanTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<boolean>> => {
      return testMethod(this, "isLoanComplete", params, getContractByCodeHash);
    },
    getInterest: async (
      params: Omit<
        TestContractParamsWithoutMaps<LoanTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getInterest", params, getContractByCodeHash);
    },
    getCommission: async (
      params: TestContractParamsWithoutMaps<LoanTypes.Fields, { total: bigint }>
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getCommission", params, getContractByCodeHash);
    },
    acceptLoan: async (
      params: TestContractParamsWithoutMaps<
        LoanTypes.Fields,
        { acceptor: Address; newRatio: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "acceptLoan", params, getContractByCodeHash);
    },
    cancelLoan: async (
      params: TestContractParamsWithoutMaps<
        LoanTypes.Fields,
        { caller: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "cancelLoan", params, getContractByCodeHash);
    },
    forceCancel: async (
      params: Omit<
        TestContractParamsWithoutMaps<LoanTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "forceCancel", params, getContractByCodeHash);
    },
    payLoan: async (
      params: TestContractParamsWithoutMaps<
        LoanTypes.Fields,
        { caller: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "payLoan", params, getContractByCodeHash);
    },
    acceptForfeit: async (
      params: Omit<
        TestContractParamsWithoutMaps<LoanTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "acceptForfeit", params, getContractByCodeHash);
    },
    addCollateral: async (
      params: TestContractParamsWithoutMaps<
        LoanTypes.Fields,
        { caller: Address; collateralAdded: bigint; newRatio: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "addCollateral", params, getContractByCodeHash);
    },
    activateLiquidation: async (
      params: TestContractParamsWithoutMaps<
        LoanTypes.Fields,
        { collateralLevel: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(
        this,
        "activateLiquidation",
        params,
        getContractByCodeHash
      );
    },
    bid: async (
      params: TestContractParamsWithoutMaps<
        LoanTypes.Fields,
        { caller: Address; bidAmount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "bid", params, getContractByCodeHash);
    },
    redeem: async (
      params: TestContractParamsWithoutMaps<
        LoanTypes.Fields,
        { caller: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "redeem", params, getContractByCodeHash);
    },
    updateLoanCode: async (
      params: TestContractParamsWithoutMaps<
        LoanTypes.Fields,
        { newCode: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "updateLoanCode", params, getContractByCodeHash);
    },
    updateLoanFields: async (
      params: TestContractParamsWithoutMaps<
        LoanTypes.Fields,
        { newCode: HexString; immFields: HexString; mutFields: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(
        this,
        "updateLoanFields",
        params,
        getContractByCodeHash
      );
    },
    removeCollateral: async (
      params: TestContractParamsWithoutMaps<
        LoanTypes.Fields,
        { caller: Address; collateralRemoved: bigint; newRatio: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(
        this,
        "removeCollateral",
        params,
        getContractByCodeHash
      );
    },
  };

  stateForTest(initFields: LoanTypes.Fields, asset?: Asset, address?: string) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const Loan = new Factory(
  Contract.fromJson(
    LoanContractJson,
    "",
    "9502d2c0422fb650cc58a499c576bc5fa4954bbcc469364332695a3cdb3657d1",
    AllStructs
  )
);
registerContract(Loan);

// Use this class to interact with the blockchain
export class LoanInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<LoanTypes.State> {
    return fetchContractState(Loan, this);
  }

  view = {
    getTokenRequested: async (
      params?: LoanTypes.CallMethodParams<"getTokenRequested">
    ): Promise<LoanTypes.CallMethodResult<"getTokenRequested">> => {
      return callMethod(
        Loan,
        this,
        "getTokenRequested",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getHighestBid: async (
      params?: LoanTypes.CallMethodParams<"getHighestBid">
    ): Promise<LoanTypes.CallMethodResult<"getHighestBid">> => {
      return callMethod(
        Loan,
        this,
        "getHighestBid",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getTokenCollateral: async (
      params?: LoanTypes.CallMethodParams<"getTokenCollateral">
    ): Promise<LoanTypes.CallMethodResult<"getTokenCollateral">> => {
      return callMethod(
        Loan,
        this,
        "getTokenCollateral",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    canLoanLiquidate: async (
      params?: LoanTypes.CallMethodParams<"canLoanLiquidate">
    ): Promise<LoanTypes.CallMethodResult<"canLoanLiquidate">> => {
      return callMethod(
        Loan,
        this,
        "canLoanLiquidate",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    isLoanComplete: async (
      params?: LoanTypes.CallMethodParams<"isLoanComplete">
    ): Promise<LoanTypes.CallMethodResult<"isLoanComplete">> => {
      return callMethod(
        Loan,
        this,
        "isLoanComplete",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getInterest: async (
      params?: LoanTypes.CallMethodParams<"getInterest">
    ): Promise<LoanTypes.CallMethodResult<"getInterest">> => {
      return callMethod(
        Loan,
        this,
        "getInterest",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getCommission: async (
      params: LoanTypes.CallMethodParams<"getCommission">
    ): Promise<LoanTypes.CallMethodResult<"getCommission">> => {
      return callMethod(
        Loan,
        this,
        "getCommission",
        params,
        getContractByCodeHash
      );
    },
    acceptLoan: async (
      params: LoanTypes.CallMethodParams<"acceptLoan">
    ): Promise<LoanTypes.CallMethodResult<"acceptLoan">> => {
      return callMethod(
        Loan,
        this,
        "acceptLoan",
        params,
        getContractByCodeHash
      );
    },
    cancelLoan: async (
      params: LoanTypes.CallMethodParams<"cancelLoan">
    ): Promise<LoanTypes.CallMethodResult<"cancelLoan">> => {
      return callMethod(
        Loan,
        this,
        "cancelLoan",
        params,
        getContractByCodeHash
      );
    },
    forceCancel: async (
      params?: LoanTypes.CallMethodParams<"forceCancel">
    ): Promise<LoanTypes.CallMethodResult<"forceCancel">> => {
      return callMethod(
        Loan,
        this,
        "forceCancel",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    payLoan: async (
      params: LoanTypes.CallMethodParams<"payLoan">
    ): Promise<LoanTypes.CallMethodResult<"payLoan">> => {
      return callMethod(Loan, this, "payLoan", params, getContractByCodeHash);
    },
    acceptForfeit: async (
      params?: LoanTypes.CallMethodParams<"acceptForfeit">
    ): Promise<LoanTypes.CallMethodResult<"acceptForfeit">> => {
      return callMethod(
        Loan,
        this,
        "acceptForfeit",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    addCollateral: async (
      params: LoanTypes.CallMethodParams<"addCollateral">
    ): Promise<LoanTypes.CallMethodResult<"addCollateral">> => {
      return callMethod(
        Loan,
        this,
        "addCollateral",
        params,
        getContractByCodeHash
      );
    },
    activateLiquidation: async (
      params: LoanTypes.CallMethodParams<"activateLiquidation">
    ): Promise<LoanTypes.CallMethodResult<"activateLiquidation">> => {
      return callMethod(
        Loan,
        this,
        "activateLiquidation",
        params,
        getContractByCodeHash
      );
    },
    bid: async (
      params: LoanTypes.CallMethodParams<"bid">
    ): Promise<LoanTypes.CallMethodResult<"bid">> => {
      return callMethod(Loan, this, "bid", params, getContractByCodeHash);
    },
    redeem: async (
      params: LoanTypes.CallMethodParams<"redeem">
    ): Promise<LoanTypes.CallMethodResult<"redeem">> => {
      return callMethod(Loan, this, "redeem", params, getContractByCodeHash);
    },
    updateLoanCode: async (
      params: LoanTypes.CallMethodParams<"updateLoanCode">
    ): Promise<LoanTypes.CallMethodResult<"updateLoanCode">> => {
      return callMethod(
        Loan,
        this,
        "updateLoanCode",
        params,
        getContractByCodeHash
      );
    },
    updateLoanFields: async (
      params: LoanTypes.CallMethodParams<"updateLoanFields">
    ): Promise<LoanTypes.CallMethodResult<"updateLoanFields">> => {
      return callMethod(
        Loan,
        this,
        "updateLoanFields",
        params,
        getContractByCodeHash
      );
    },
    removeCollateral: async (
      params: LoanTypes.CallMethodParams<"removeCollateral">
    ): Promise<LoanTypes.CallMethodResult<"removeCollateral">> => {
      return callMethod(
        Loan,
        this,
        "removeCollateral",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getTokenRequested: async (
      params: LoanTypes.SignExecuteMethodParams<"getTokenRequested">
    ): Promise<LoanTypes.SignExecuteMethodResult<"getTokenRequested">> => {
      return signExecuteMethod(Loan, this, "getTokenRequested", params);
    },
    getHighestBid: async (
      params: LoanTypes.SignExecuteMethodParams<"getHighestBid">
    ): Promise<LoanTypes.SignExecuteMethodResult<"getHighestBid">> => {
      return signExecuteMethod(Loan, this, "getHighestBid", params);
    },
    getTokenCollateral: async (
      params: LoanTypes.SignExecuteMethodParams<"getTokenCollateral">
    ): Promise<LoanTypes.SignExecuteMethodResult<"getTokenCollateral">> => {
      return signExecuteMethod(Loan, this, "getTokenCollateral", params);
    },
    canLoanLiquidate: async (
      params: LoanTypes.SignExecuteMethodParams<"canLoanLiquidate">
    ): Promise<LoanTypes.SignExecuteMethodResult<"canLoanLiquidate">> => {
      return signExecuteMethod(Loan, this, "canLoanLiquidate", params);
    },
    isLoanComplete: async (
      params: LoanTypes.SignExecuteMethodParams<"isLoanComplete">
    ): Promise<LoanTypes.SignExecuteMethodResult<"isLoanComplete">> => {
      return signExecuteMethod(Loan, this, "isLoanComplete", params);
    },
    getInterest: async (
      params: LoanTypes.SignExecuteMethodParams<"getInterest">
    ): Promise<LoanTypes.SignExecuteMethodResult<"getInterest">> => {
      return signExecuteMethod(Loan, this, "getInterest", params);
    },
    getCommission: async (
      params: LoanTypes.SignExecuteMethodParams<"getCommission">
    ): Promise<LoanTypes.SignExecuteMethodResult<"getCommission">> => {
      return signExecuteMethod(Loan, this, "getCommission", params);
    },
    acceptLoan: async (
      params: LoanTypes.SignExecuteMethodParams<"acceptLoan">
    ): Promise<LoanTypes.SignExecuteMethodResult<"acceptLoan">> => {
      return signExecuteMethod(Loan, this, "acceptLoan", params);
    },
    cancelLoan: async (
      params: LoanTypes.SignExecuteMethodParams<"cancelLoan">
    ): Promise<LoanTypes.SignExecuteMethodResult<"cancelLoan">> => {
      return signExecuteMethod(Loan, this, "cancelLoan", params);
    },
    forceCancel: async (
      params: LoanTypes.SignExecuteMethodParams<"forceCancel">
    ): Promise<LoanTypes.SignExecuteMethodResult<"forceCancel">> => {
      return signExecuteMethod(Loan, this, "forceCancel", params);
    },
    payLoan: async (
      params: LoanTypes.SignExecuteMethodParams<"payLoan">
    ): Promise<LoanTypes.SignExecuteMethodResult<"payLoan">> => {
      return signExecuteMethod(Loan, this, "payLoan", params);
    },
    acceptForfeit: async (
      params: LoanTypes.SignExecuteMethodParams<"acceptForfeit">
    ): Promise<LoanTypes.SignExecuteMethodResult<"acceptForfeit">> => {
      return signExecuteMethod(Loan, this, "acceptForfeit", params);
    },
    addCollateral: async (
      params: LoanTypes.SignExecuteMethodParams<"addCollateral">
    ): Promise<LoanTypes.SignExecuteMethodResult<"addCollateral">> => {
      return signExecuteMethod(Loan, this, "addCollateral", params);
    },
    activateLiquidation: async (
      params: LoanTypes.SignExecuteMethodParams<"activateLiquidation">
    ): Promise<LoanTypes.SignExecuteMethodResult<"activateLiquidation">> => {
      return signExecuteMethod(Loan, this, "activateLiquidation", params);
    },
    bid: async (
      params: LoanTypes.SignExecuteMethodParams<"bid">
    ): Promise<LoanTypes.SignExecuteMethodResult<"bid">> => {
      return signExecuteMethod(Loan, this, "bid", params);
    },
    redeem: async (
      params: LoanTypes.SignExecuteMethodParams<"redeem">
    ): Promise<LoanTypes.SignExecuteMethodResult<"redeem">> => {
      return signExecuteMethod(Loan, this, "redeem", params);
    },
    updateLoanCode: async (
      params: LoanTypes.SignExecuteMethodParams<"updateLoanCode">
    ): Promise<LoanTypes.SignExecuteMethodResult<"updateLoanCode">> => {
      return signExecuteMethod(Loan, this, "updateLoanCode", params);
    },
    updateLoanFields: async (
      params: LoanTypes.SignExecuteMethodParams<"updateLoanFields">
    ): Promise<LoanTypes.SignExecuteMethodResult<"updateLoanFields">> => {
      return signExecuteMethod(Loan, this, "updateLoanFields", params);
    },
    removeCollateral: async (
      params: LoanTypes.SignExecuteMethodParams<"removeCollateral">
    ): Promise<LoanTypes.SignExecuteMethodResult<"removeCollateral">> => {
      return signExecuteMethod(Loan, this, "removeCollateral", params);
    },
  };

  async multicall<Calls extends LoanTypes.MultiCallParams>(
    calls: Calls
  ): Promise<LoanTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends LoanTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<LoanTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends LoanTypes.MultiCallParams | LoanTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(Loan, this, callss, getContractByCodeHash);
  }
}
