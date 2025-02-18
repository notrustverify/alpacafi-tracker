import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { ZERO_ADDRESS } from '@alephium/web3'
import { LoanFactory } from '../artifacts/ts';

const deployLoan: DeployFunction<Settings> = async (
  deployer: Deployer,
  network: Network<Settings>
): Promise<void> => {
  const result = await deployer.deployContract(LoanFactory, {
    initialFields: {
      admin: deployer.account.address,
      loanTemplate: '2e592369cd28f91517375b9cfdb57591b44696158cfe4f1280f69c979dd6d900',
      auctionHouse: 'b88a9891213af953a06c0bdc5f4a03ee25ab4d24a3b911ff59c2320b8a54fd00',
      activeLoans: 0n,
      rate: 300n,
      oracle: '285zrkZTPpUCpjKg9E3z238VmpUBQEAbESGsJT6yX7Rod',
      alpaca: '79b75a922382f264422a1a4a7a874ee63340ab703612b5ade24b1324176f0b00',
    }
  })

  const contractId = result.contractInstance.contractId
  const contractAddress = result.contractInstance.address
  console.log(`Loan Factory: ${contractAddress}, contract id: ${contractId}`)
}

export default deployLoan