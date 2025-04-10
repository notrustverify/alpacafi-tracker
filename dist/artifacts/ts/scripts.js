"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawLoanFactoryFees = exports.Withdraw = exports.UpdatePair = exports.UpdateOracleCode = exports.UpdateLoanFields = exports.UpdateLoanFactoryFields = exports.UpdateLoanFactoryCode = exports.UpdateLoanCode = exports.UpdateDebtFields = exports.UpdateDebtCode = exports.UpdateBotAddress = exports.UpdateAuctionFields = exports.UpdateAuctionFactoryFields = exports.UpdateAuctionFactoryCode = exports.UpdateAuctionCode = exports.TokenMapping = exports.Repay = exports.RemovePair = exports.RemoveCollateral = exports.Redeem = exports.PayLoan = exports.MintSupply = exports.LiquidationLoan = exports.LiquidateDebt = exports.InsertPair = exports.ForfeitLoan = exports.ForceDestroyFee = exports.ForceCancel = exports.EditLoanRate = exports.EditLoanFactory = exports.EditAuctionRate = exports.EditAdminFee = exports.Deposit = exports.CreateStablePool = exports.CreateLoan = exports.CancelLoan = exports.Borrow = exports.Bid = exports.AddCollateral = exports.AcceptLoan = void 0;
const web3_1 = require("@alephium/web3");
const contracts_1 = require("./contracts");
const AcceptLoan_ral_json_1 = __importDefault(require("../loans/AcceptLoan.ral.json"));
const AddCollateral_ral_json_1 = __importDefault(require("../loans/AddCollateral.ral.json"));
const Bid_ral_json_1 = __importDefault(require("../auctions/Bid.ral.json"));
const Borrow_ral_json_1 = __importDefault(require("../pool-lending/Borrow.ral.json"));
const CancelLoan_ral_json_1 = __importDefault(require("../loans/CancelLoan.ral.json"));
const CreateLoan_ral_json_1 = __importDefault(require("../loans/CreateLoan.ral.json"));
const CreateStablePool_ral_json_1 = __importDefault(require("../pool-lending/CreateStablePool.ral.json"));
const Deposit_ral_json_1 = __importDefault(require("../pool-lending/Deposit.ral.json"));
const EditAdminFee_ral_json_1 = __importDefault(require("../fees/EditAdminFee.ral.json"));
const EditAuctionRate_ral_json_1 = __importDefault(require("../auctions/EditAuctionRate.ral.json"));
const EditLoanFactory_ral_json_1 = __importDefault(require("../auctions/EditLoanFactory.ral.json"));
const EditLoanRate_ral_json_1 = __importDefault(require("../loans/EditLoanRate.ral.json"));
const ForceCancel_ral_json_1 = __importDefault(require("../loans/ForceCancel.ral.json"));
const ForceDestroyFee_ral_json_1 = __importDefault(require("../fees/ForceDestroyFee.ral.json"));
const ForfeitLoan_ral_json_1 = __importDefault(require("../loans/ForfeitLoan.ral.json"));
const InsertPair_ral_json_1 = __importDefault(require("../oracle/InsertPair.ral.json"));
const LiquidateDebt_ral_json_1 = __importDefault(require("../pool-lending/LiquidateDebt.ral.json"));
const LiquidationLoan_ral_json_1 = __importDefault(require("../loans/LiquidationLoan.ral.json"));
const MintSupply_ral_json_1 = __importDefault(require("../test-contracts/MintSupply.ral.json"));
const PayLoan_ral_json_1 = __importDefault(require("../loans/PayLoan.ral.json"));
const Redeem_ral_json_1 = __importDefault(require("../auctions/Redeem.ral.json"));
const RemoveCollateral_ral_json_1 = __importDefault(require("../loans/RemoveCollateral.ral.json"));
const RemovePair_ral_json_1 = __importDefault(require("../oracle/RemovePair.ral.json"));
const Repay_ral_json_1 = __importDefault(require("../pool-lending/Repay.ral.json"));
const TokenMapping_ral_json_1 = __importDefault(require("../loans/TokenMapping.ral.json"));
const UpdateAuctionCode_ral_json_1 = __importDefault(require("../auctions/UpdateAuctionCode.ral.json"));
const UpdateAuctionFactoryCode_ral_json_1 = __importDefault(require("../auctions/UpdateAuctionFactoryCode.ral.json"));
const UpdateAuctionFactoryFields_ral_json_1 = __importDefault(require("../auctions/UpdateAuctionFactoryFields.ral.json"));
const UpdateAuctionFields_ral_json_1 = __importDefault(require("../auctions/UpdateAuctionFields.ral.json"));
const UpdateBotAddress_ral_json_1 = __importDefault(require("../oracle/UpdateBotAddress.ral.json"));
const UpdateDebtCode_ral_json_1 = __importDefault(require("../pool-lending/UpdateDebtCode.ral.json"));
const UpdateDebtFields_ral_json_1 = __importDefault(require("../pool-lending/UpdateDebtFields.ral.json"));
const UpdateLoanCode_ral_json_1 = __importDefault(require("../loans/UpdateLoanCode.ral.json"));
const UpdateLoanFactoryCode_ral_json_1 = __importDefault(require("../loans/UpdateLoanFactoryCode.ral.json"));
const UpdateLoanFactoryFields_ral_json_1 = __importDefault(require("../loans/UpdateLoanFactoryFields.ral.json"));
const UpdateLoanFields_ral_json_1 = __importDefault(require("../loans/UpdateLoanFields.ral.json"));
const UpdateOracleCode_ral_json_1 = __importDefault(require("../oracle/UpdateOracleCode.ral.json"));
const UpdatePair_ral_json_1 = __importDefault(require("../oracle/UpdatePair.ral.json"));
const Withdraw_ral_json_1 = __importDefault(require("../pool-lending/Withdraw.ral.json"));
const WithdrawLoanFactoryFees_ral_json_1 = __importDefault(require("../loans/WithdrawLoanFactoryFees.ral.json"));
const types_1 = require("./types");
exports.AcceptLoan = new web3_1.ExecutableScript(web3_1.Script.fromJson(AcceptLoan_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.AddCollateral = new web3_1.ExecutableScript(web3_1.Script.fromJson(AddCollateral_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.Bid = new web3_1.ExecutableScript(web3_1.Script.fromJson(Bid_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.Borrow = new web3_1.ExecutableScript(web3_1.Script.fromJson(Borrow_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.CancelLoan = new web3_1.ExecutableScript(web3_1.Script.fromJson(CancelLoan_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.CreateLoan = new web3_1.ExecutableScript(web3_1.Script.fromJson(CreateLoan_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.CreateStablePool = new web3_1.ExecutableScript(web3_1.Script.fromJson(CreateStablePool_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.Deposit = new web3_1.ExecutableScript(web3_1.Script.fromJson(Deposit_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.EditAdminFee = new web3_1.ExecutableScript(web3_1.Script.fromJson(EditAdminFee_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.EditAuctionRate = new web3_1.ExecutableScript(web3_1.Script.fromJson(EditAuctionRate_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.EditLoanFactory = new web3_1.ExecutableScript(web3_1.Script.fromJson(EditLoanFactory_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.EditLoanRate = new web3_1.ExecutableScript(web3_1.Script.fromJson(EditLoanRate_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.ForceCancel = new web3_1.ExecutableScript(web3_1.Script.fromJson(ForceCancel_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.ForceDestroyFee = new web3_1.ExecutableScript(web3_1.Script.fromJson(ForceDestroyFee_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.ForfeitLoan = new web3_1.ExecutableScript(web3_1.Script.fromJson(ForfeitLoan_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.InsertPair = new web3_1.ExecutableScript(web3_1.Script.fromJson(InsertPair_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.LiquidateDebt = new web3_1.ExecutableScript(web3_1.Script.fromJson(LiquidateDebt_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.LiquidationLoan = new web3_1.ExecutableScript(web3_1.Script.fromJson(LiquidationLoan_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.MintSupply = new web3_1.ExecutableScript(web3_1.Script.fromJson(MintSupply_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.PayLoan = new web3_1.ExecutableScript(web3_1.Script.fromJson(PayLoan_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.Redeem = new web3_1.ExecutableScript(web3_1.Script.fromJson(Redeem_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.RemoveCollateral = new web3_1.ExecutableScript(web3_1.Script.fromJson(RemoveCollateral_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.RemovePair = new web3_1.ExecutableScript(web3_1.Script.fromJson(RemovePair_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.Repay = new web3_1.ExecutableScript(web3_1.Script.fromJson(Repay_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.TokenMapping = new web3_1.ExecutableScript(web3_1.Script.fromJson(TokenMapping_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.UpdateAuctionCode = new web3_1.ExecutableScript(web3_1.Script.fromJson(UpdateAuctionCode_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.UpdateAuctionFactoryCode = new web3_1.ExecutableScript(web3_1.Script.fromJson(UpdateAuctionFactoryCode_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.UpdateAuctionFactoryFields = new web3_1.ExecutableScript(web3_1.Script.fromJson(UpdateAuctionFactoryFields_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.UpdateAuctionFields = new web3_1.ExecutableScript(web3_1.Script.fromJson(UpdateAuctionFields_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.UpdateBotAddress = new web3_1.ExecutableScript(web3_1.Script.fromJson(UpdateBotAddress_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.UpdateDebtCode = new web3_1.ExecutableScript(web3_1.Script.fromJson(UpdateDebtCode_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.UpdateDebtFields = new web3_1.ExecutableScript(web3_1.Script.fromJson(UpdateDebtFields_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.UpdateLoanCode = new web3_1.ExecutableScript(web3_1.Script.fromJson(UpdateLoanCode_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.UpdateLoanFactoryCode = new web3_1.ExecutableScript(web3_1.Script.fromJson(UpdateLoanFactoryCode_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.UpdateLoanFactoryFields = new web3_1.ExecutableScript(web3_1.Script.fromJson(UpdateLoanFactoryFields_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.UpdateLoanFields = new web3_1.ExecutableScript(web3_1.Script.fromJson(UpdateLoanFields_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.UpdateOracleCode = new web3_1.ExecutableScript(web3_1.Script.fromJson(UpdateOracleCode_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.UpdatePair = new web3_1.ExecutableScript(web3_1.Script.fromJson(UpdatePair_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.Withdraw = new web3_1.ExecutableScript(web3_1.Script.fromJson(Withdraw_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
exports.WithdrawLoanFactoryFees = new web3_1.ExecutableScript(web3_1.Script.fromJson(WithdrawLoanFactoryFees_ral_json_1.default, "", types_1.AllStructs), contracts_1.getContractByCodeHash);
