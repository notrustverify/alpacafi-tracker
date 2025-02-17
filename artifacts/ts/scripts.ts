/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  ExecutableScript,
  ExecuteScriptParams,
  ExecuteScriptResult,
  Script,
  SignerProvider,
  HexString,
} from "@alephium/web3";
import { getContractByCodeHash } from "./contracts";
import { default as AcceptLoanScriptJson } from "../loans/AcceptLoan.ral.json";
import { default as AddCollateralScriptJson } from "../loans/AddCollateral.ral.json";
import { default as BidLoanScriptJson } from "../loans/BidLoan.ral.json";
import { default as CancelLoanScriptJson } from "../loans/CancelLoan.ral.json";
import { default as CreateLoanScriptJson } from "../loans/CreateLoan.ral.json";
import { default as DestroyLoanFactoryScriptJson } from "../loans/DestroyLoanFactory.ral.json";
import { default as EditLoanRateScriptJson } from "../loans/EditLoanRate.ral.json";
import { default as ForceCancelScriptJson } from "../loans/ForceCancel.ral.json";
import { default as ForceCancelMarketScriptJson } from "../loans/ForceCancelMarket.ral.json";
import { default as ForfeitLoanScriptJson } from "../loans/ForfeitLoan.ral.json";
import { default as InsertPairScriptJson } from "../oracle/InsertPair.ral.json";
import { default as LiquidationLoanScriptJson } from "../loans/LiquidationLoan.ral.json";
import { default as PayLoanScriptJson } from "../loans/PayLoan.ral.json";
import { default as RedeemLoanScriptJson } from "../loans/RedeemLoan.ral.json";
import { default as RemoveCollateralScriptJson } from "../loans/RemoveCollateral.ral.json";
import { default as RemovePairScriptJson } from "../oracle/RemovePair.ral.json";
import { default as TokenMappingScriptJson } from "../loans/TokenMapping.ral.json";
import { default as UpdateBotAddressScriptJson } from "../oracle/UpdateBotAddress.ral.json";
import { default as UpdateLoanCodeScriptJson } from "../loans/UpdateLoanCode.ral.json";
import { default as UpdateLoanFactoryCodeScriptJson } from "../loans/UpdateLoanFactoryCode.ral.json";
import { default as UpdateLoanFactoryFieldsScriptJson } from "../loans/UpdateLoanFactoryFields.ral.json";
import { default as UpdateLoanFieldsScriptJson } from "../loans/UpdateLoanFields.ral.json";
import { default as UpdateMarketCodeScriptJson } from "../loans/UpdateMarketCode.ral.json";
import { default as UpdateMarketFieldsScriptJson } from "../loans/UpdateMarketFields.ral.json";
import { default as UpdateOracleCodeScriptJson } from "../oracle/UpdateOracleCode.ral.json";
import { default as UpdatePairScriptJson } from "../oracle/UpdatePair.ral.json";
import { default as WithdrawLoanFactoryFeesScriptJson } from "../loans/WithdrawLoanFactoryFees.ral.json";
import { DIAOracleValue, OracleData, PairInfo, AllStructs } from "./types";

export const AcceptLoan = new ExecutableScript<{
  loanFactory: HexString;
  contract: HexString;
  tokenOracle: boolean;
  collateralOracle: boolean;
}>(
  Script.fromJson(AcceptLoanScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const AddCollateral = new ExecutableScript<{
  loanFactory: HexString;
  contractId: HexString;
  amount: bigint;
  tokenOracle: boolean;
  collateralOracle: boolean;
}>(
  Script.fromJson(AddCollateralScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const BidLoan = new ExecutableScript<{
  loanFactory: HexString;
  contract: HexString;
  bidAmount: bigint;
  token: HexString;
}>(Script.fromJson(BidLoanScriptJson, "", AllStructs), getContractByCodeHash);

export const CancelLoan = new ExecutableScript<{
  loanFactory: HexString;
  contract: HexString;
}>(
  Script.fromJson(CancelLoanScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const CreateLoan = new ExecutableScript<{
  loanFactory: HexString;
  tokenRequested: HexString;
  tokenAmount: bigint;
  tokenOracle: boolean;
  collateralToken: HexString;
  collateralAmount: bigint;
  collateralOracle: boolean;
  interest: bigint;
  duration: bigint;
  canLiquidate: boolean;
}>(
  Script.fromJson(CreateLoanScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const DestroyLoanFactory = new ExecutableScript<{
  loanFactory: HexString;
}>(
  Script.fromJson(DestroyLoanFactoryScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const EditLoanRate = new ExecutableScript<{
  loanFactory: HexString;
  newRate: bigint;
}>(
  Script.fromJson(EditLoanRateScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const ForceCancel = new ExecutableScript<{ loan: HexString }>(
  Script.fromJson(ForceCancelScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const ForceCancelMarket = new ExecutableScript<{ loan: HexString }>(
  Script.fromJson(ForceCancelMarketScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const ForfeitLoan = new ExecutableScript<{
  loanFactory: HexString;
  contract: HexString;
}>(
  Script.fromJson(ForfeitLoanScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const InsertPair = new ExecutableScript<{
  oracle: HexString;
  pair: HexString;
  token: HexString;
  price: bigint;
  decimals: bigint;
}>(
  Script.fromJson(InsertPairScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const LiquidationLoan = new ExecutableScript<{
  loanFactory: HexString;
  contract: HexString;
  tokenOracle: boolean;
  collateralOracle: boolean;
}>(
  Script.fromJson(LiquidationLoanScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const PayLoan = new ExecutableScript<{
  loanFactory: HexString;
  contract: HexString;
}>(Script.fromJson(PayLoanScriptJson, "", AllStructs), getContractByCodeHash);

export const RedeemLoan = new ExecutableScript<{
  loanFactory: HexString;
  contract: HexString;
}>(
  Script.fromJson(RedeemLoanScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const RemoveCollateral = new ExecutableScript<{
  loanFactory: HexString;
  contractId: HexString;
  amount: bigint;
  tokenOracle: boolean;
  collateralOracle: boolean;
}>(
  Script.fromJson(RemoveCollateralScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const RemovePair = new ExecutableScript<{
  oracle: HexString;
  pair: HexString;
}>(
  Script.fromJson(RemovePairScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const TokenMapping = new ExecutableScript<{
  loanFactory: HexString;
  token: HexString;
  add: boolean;
  pairtoken: HexString;
  decimals: bigint;
}>(
  Script.fromJson(TokenMappingScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const UpdateBotAddress = new ExecutableScript<{
  oracle: HexString;
  newBot: Address;
}>(
  Script.fromJson(UpdateBotAddressScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const UpdateLoanCode = new ExecutableScript<{
  loan: HexString;
  newCode: HexString;
}>(
  Script.fromJson(UpdateLoanCodeScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const UpdateLoanFactoryCode = new ExecutableScript<{
  loanFactory: HexString;
  newCode: HexString;
}>(
  Script.fromJson(UpdateLoanFactoryCodeScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const UpdateLoanFactoryFields = new ExecutableScript<{
  loanFactory: HexString;
  newCode: HexString;
  immFields: HexString;
  mutFields: HexString;
}>(
  Script.fromJson(UpdateLoanFactoryFieldsScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const UpdateLoanFields = new ExecutableScript<{
  loan: HexString;
  newCode: HexString;
  immFields: HexString;
  mutFields: HexString;
}>(
  Script.fromJson(UpdateLoanFieldsScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const UpdateMarketCode = new ExecutableScript<{
  market: HexString;
  newCode: HexString;
}>(
  Script.fromJson(UpdateMarketCodeScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const UpdateMarketFields = new ExecutableScript<{
  market: HexString;
  newCode: HexString;
  immFields: HexString;
  mutFields: HexString;
}>(
  Script.fromJson(UpdateMarketFieldsScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const UpdateOracleCode = new ExecutableScript<{
  oracle: HexString;
  newCode: HexString;
}>(
  Script.fromJson(UpdateOracleCodeScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const UpdatePair = new ExecutableScript<{
  oracle: HexString;
  pair: HexString;
  price: bigint;
}>(
  Script.fromJson(UpdatePairScriptJson, "", AllStructs),
  getContractByCodeHash
);

export const WithdrawLoanFactoryFees = new ExecutableScript<{
  loanFactory: HexString;
  who: Address;
  token: HexString;
  amount: bigint;
}>(
  Script.fromJson(WithdrawLoanFactoryFeesScriptJson, "", AllStructs),
  getContractByCodeHash
);
