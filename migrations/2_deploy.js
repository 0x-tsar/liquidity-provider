const Collateral = artifacts.require("Collateral");
const Dai = artifacts.require("Dai");

module.exports = async (deployer) => {
  await deployer.deploy(Dai);
  const dai = await Dai.deployed();

  await deployer.deploy(Collateral, dai.address);
  const collateral = await Collateral.deployed();
};
