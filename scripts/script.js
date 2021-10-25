const Collateral = artifacts.require("Collateral");
const Dai = artifacts.require("Dai");

module.exports = async () => {
  try {
    // console.log(Collateral);
    const collateral = await Collateral.deployed();
    const dai = await Dai.deployed();
    const [account, _] = await web3.eth.getAccounts();
    const value = await web3.utils.toWei("0.5");
    await dai.approve(collateral.address, value, { from: account });
    await collateral.providerLiquidity(value, { from: account });
    const daiBalance = await dai.balanceOf(account);
    const contractDaiBalance = await dai.balanceOf(collateral.address);
    const lpBalance = await collateral.balanceOf(account);
    console.log("after operation");
    console.log(`my Dai balanace ${daiBalance}`);
    console.log(`contract Dai balance ${contractDaiBalance}`);
    console.log(`my collateral backed token ${lpBalance}`);
  } catch (error) {
    console.log(error);
  }
};

// CREATE 2 ERC20 TOKENS, 1 NORMAL AND THE OTHER FOR LP provider
